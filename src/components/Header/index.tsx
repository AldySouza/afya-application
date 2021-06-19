import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { HeaderComponent } from './styles';
import { IResponse } from './interfaces';

import ButtonOutline from '../ButtonOutline';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Pin } from '../../assets/pin.svg';
import AuthContext from '../../context/AuthContext';

const Header: React.FC = () => {
    const [states, setStates] = useState<IResponse[]>([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getStates();
    }, []);

    const getStates = async () => {
        const states = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        setStates(states.data);
    }



  return (
    <HeaderComponent>
      <Link to="/">
        <Logo />
      </Link>

      <Link to="/Agendamentos" >
          <ButtonOutline>
            Agendamentos
          </ButtonOutline>
        </Link>
        <Link to="/Agendar" >
          <ButtonOutline>
            Agendar
          </ButtonOutline>
        </Link>

        <div className="nav">
                { user && <span>Olá, <strong>{user.name}</strong></span>}
                <Pin />
                <span>Estou em 
                   <strong>
            <select name="UF">
              {
                states.length > 0 &&
                states.map(state => {
                  return (
                    <option key={state.id} value={state.nome}>{state.sigla}</option>
                  )
                })
              }
            </select>
          </strong>
        </span>
        <Link to="/login">
          <ButtonOutline>
            Entrar
          </ButtonOutline>
        </Link>
      </div>
    </HeaderComponent>
  )
}

export default Header;
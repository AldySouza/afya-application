import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { HeaderComponent } from './styles';
import { IResponse } from './interfaces';

import ButtonOutline from '../ButtonOutline';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Pin } from '../../assets/pin.svg';

const HeaderSpecialista: React.FC = () => {
  const [states, setStates] = useState<IResponse[]>([]);

  useEffect(() => {
    getStates();
  }, []);

  const getStates = async () => {
    const states = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    setStates(states.data);
  }

  const signOut = () => {
    localStorage.removeItem('@token');
    localStorage.removeItem('@user');

    window.location.href = '/login';
  }

  return (
    <HeaderComponent>
      <Link to="/especialista">
        <Logo />
      </Link>

      <Link to="/agendados" >
          <ButtonOutline>
            Agendamentos
          </ButtonOutline>
        </Link>
        
        <Link to="/Calendario" >
          <ButtonOutline>
            Calendário
          </ButtonOutline>
        </Link>

        <Link to="/Pacientes" >
          <ButtonOutline>
            Paciente
          </ButtonOutline>
        </Link>

        <Link to="/Historico" >
          <ButtonOutline>
            Historico
          </ButtonOutline>
        </Link>


        <Link to="/Prontuarios" >
          <ButtonOutline>
            Prontuários
          </ButtonOutline>
        </Link>

      <div className="nav">
      
        
        <ButtonOutline onClick={() => signOut()}>
          sair
        </ButtonOutline>
      </div>
    </HeaderComponent>
  )
}

export default HeaderSpecialista;
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { HeaderComponent } from './styles';
import { IResponse } from './interfaces';

import ButtonOutline from '../ButtonOutline';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Pin } from '../../assets/pin.svg';

const Header: React.FC = () => {
    const [states, setStates] = useState<IResponse[]>([]);

    useEffect(() => {
        getStates();
    }, []);

    const getStates = async () => {
        const states = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        setStates(states.data);
    }

    const handleClick = () => {
        console.log('button clicked')
    }

    return (
        <HeaderComponent>
           <Logo />

           <div className="nav">
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
                <ButtonOutline onClick={handleClick}>
                    Entrar
                </ButtonOutline>
           </div>
        </HeaderComponent>
    )
}

export default Header;
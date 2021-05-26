import React from 'react';

import { HeaderComponent } from './styles';
import { IProps } from './interfaces';

import ButtonOutline from '../ButtonOutline';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Pin } from '../../assets/pin.svg';

const Header: React.FC<IProps> = () => {
    const handleClick = () => {
        console.log('button clicked')
    }

    return (
        <HeaderComponent>
           <Logo />

           <div className="nav">
               <Pin /> <span>Estou em <strong>MG</strong></span>
                <ButtonOutline onClick={handleClick}>
                    Entrar
                </ButtonOutline>
           </div>
        </HeaderComponent>
    )
}

export default Header;
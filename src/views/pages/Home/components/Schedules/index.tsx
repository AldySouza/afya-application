import React, { useState, useEffect, useContext } from 'react';
import AuthContext from "../../../../../context/AuthContext";

import { Container } from './styles';

import Button from '../../../../../components/Button'
import ButtonOutline from '../../../../../components/ButtonOutline'

interface IProps {
  title: string,
  value: number;
}

const Schedules: React.FC<IProps> = ({ title, value }) => {

  const { user } = useContext(AuthContext);

  const checkRoles = () => {
    console.log(user.roles)
    return user.roles && user.roles.some(role => role.name == 'ROLE_CLIENT');
  }

  const handleClick = () => {
    if(!user.name) { 
      window.location.href = '/login';
      return;
    }

    if(!checkRoles()) {
      window.location.href = '/registro-cliente';
      return;
    }
    
    window.location.href = '/agendar';

  }

  return (
      <>
        <Container>
            <div className="_schedule">
                <h3>{title}</h3>
                <div className="buttons">
                  <Button onClick={handleClick}>
                    <span>Agendar</span>
                  </Button>
                  <ButtonOutline>
                    <strong>R$ {value}</strong>
                  </ButtonOutline>
                </div>
            </div>
        </Container>
      </>
  );
}

export default Schedules;
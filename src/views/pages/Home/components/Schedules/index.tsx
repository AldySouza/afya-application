import React, { useState, useEffect, useContext } from 'react';
import AuthContext from "../../../../../context/AuthContext";

import { Container } from './styles';

import Button from '../../../../../components/Button'
import ButtonOutline from '../../../../../components/ButtonOutline'
import Modal from '../../../../../components/Modal';

interface IProps {
  title: string,
  value: number;
}

const Schedules: React.FC<IProps> = ({ title, value }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user } = useContext(AuthContext);

  const checkRoles = () => {
    console.log(user.roles)
    return user.roles && user.roles.some(role => role.name == 'ROLE_CLIENT');
  }

  const handleClick = (location: string) => {
    if(!user.name) { 
      window.location.href = '/login';
      return;
    }

    if(!checkRoles()) {
      window.location.href = location;
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
                  <Button onClick={() => setIsOpen(!isOpen)}>
                    <span>Agendar</span>
                  </Button>
                  <ButtonOutline>
                    <strong>R$ {value}</strong>
                  </ButtonOutline>
                </div>
            </div>
        </Container>


        <Modal
          open={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        >
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
            <img src="https://img.freepik.com/free-vector/physicians-drawing-graph-working-with-tubes_1262-19867.jpg?size=626&ext=jpg" style={{"width": "70%"}}/>
            
            <h3 style={{"margin": "30px 0"}}>Fala para a gente, você é?</h3>
            <div>
              <Button onClick={() => handleClick('/registro-cliente')}>Cliente</Button>
              <ButtonOutline onClick={() => handleClick('/registro-profissional')}>Especialista</ButtonOutline>
            </div>

          </div>
        </Modal>
      </>
  );
}

export default Schedules;
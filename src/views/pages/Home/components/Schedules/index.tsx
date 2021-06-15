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
    return user.roles && user.roles.some(role => role.name == 'ROLE_USER');
  }

  return (
      <>
      <Container>
          <div className="_schedule">
              <h3>{title}</h3>
              <div className="buttons">
                  <Button onClick={() => { checkRoles() ? alert('agendado fi') : setIsOpen(true) }}>Agendar</Button>
                  <ButtonOutline>
                    <strong>{value}</strong>
                  </ButtonOutline>
              </div>
          </div>
      </Container>

      <Modal 
        title="Modal title"
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <input placeholder="TExto"/>
        <button>SEnd</button>
      </Modal>
      </>
  );
}

export default Schedules;
import React from 'react';

import { Container } from './styles';

import Button from '../../../../../components/Button'
import ButtonOutline from '../../../../../components/ButtonOutline'
import { Link } from 'react-router-dom';

const Schedules: React.FC = () => {
  
  return (
    <Container>

    <div className="_schedule">
    <h3>Fernando Burgel </h3>
    <h3>Data de abertura- 13/06/2021 </h3>
        
    <h3>Hora 14:00</h3>
        
    <h3>Status- Agendado</h3>
        
    </div>

    <div className="_schedule">
    <h3>Ygor Menenzes </h3>
    <h3>Data de abertura- 15/06/2021 </h3>
        
    <h3>Hora 14:00</h3>
        
    <h3>Status- Agendado</h3>
    </div>

    <div className="_schedule">
    <h3>Bruno Aguiar </h3>
    <h3>Data de abertura- 17/06/2021 </h3>
        
    <h3>Hora 14:00 </h3>
        
    <h3>Status- Agendado</h3>
    </div>
</Container>
  );
}

export default Schedules;
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
              
              <h3>Data de nascimento- 13/06/1987</h3>
                    <ButtonOutline>
                      <strong>Tipo Sanguineo - A+</strong>
                    </ButtonOutline>
                
            </div>

            <div className="_schedule">
              <h3>Ygor Menenzes </h3>
              
              <h3>Data de nascimento- 25/07/1996</h3>
                    <ButtonOutline>
                      <strong>Tipo Sanguineo - B+</strong>
                    </ButtonOutline>
                
            </div>

            <div className="_schedule">
            <h3>Bruno Aguiar </h3>
              
            <h3>Data de nascimento- 27/07/1994</h3>
                    <ButtonOutline>
                      <strong> Tipo Sanguineo - AB+</strong>
                    </ButtonOutline>
                </div>
      
      </Container>
  );
}

export default Schedules;
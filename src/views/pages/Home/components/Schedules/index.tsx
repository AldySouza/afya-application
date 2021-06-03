import React from 'react';

import { Container } from './styles';

import Button from '../../../../../components/Button'
import ButtonOutline from '../../../../../components/ButtonOutline'

const Schedules: React.FC = () => {
  
  return (
      <Container>

          <div className="_schedule">
              <h3>Cardiologia - online</h3>
              <div className="buttons">
                  <Button>Agendar</Button>
                  <ButtonOutline>
                    <strong>3x de 299</strong>
                  </ButtonOutline>
              </div>
          </div>

          <div className="_schedule">
              <h3>Emdocrinologia - online</h3>
              <div className="buttons">
                  <Button>Agendar</Button>
                  <ButtonOutline>
                    <strong>3x de 299</strong>
                  </ButtonOutline>
              </div>
          </div>

          <div className="_schedule">
              <h3>Dermatologia - online</h3>
              <div className="buttons">
                  <Button>Agendar</Button>
                  <ButtonOutline>
                    <strong>3x de 299</strong>
                  </ButtonOutline>
              </div>
          </div>
      </Container>
  );
}

export default Schedules;
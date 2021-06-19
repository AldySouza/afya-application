import React from 'react';

import { Container } from './styles';

import Button from '../../../../../components/Button'
import ButtonOutline from '../../../../../components/ButtonOutline'
import { Link } from 'react-router-dom';

const Schedules: React.FC = () => {
  
  return (
      <Container>

          <div className="_schedule">
              <h3>Cardiologia - online</h3>
              <div className="buttons">
              <Button><Link to="/agendar">Agendar</Link></Button>
                  <ButtonOutline>
                    <strong> 599</strong>
                  </ButtonOutline>
              </div>
          </div>

          <div className="_schedule">
              <h3>Emdocrinologia - online</h3>
              <div className="buttons">
                  <Button><Link to="/agendar">Agendar</Link></Button>
                  <ButtonOutline>
                    <strong>459</strong>
                  </ButtonOutline>
              </div>
          </div>

          <div className="_schedule">
              <h3>Dermatologia - online</h3>
              <div className="buttons">
              <Button><Link to="/agendar">Agendar</Link></Button>
                  <ButtonOutline>
                    <strong> 299</strong>
                  </ButtonOutline>
              </div>
          </div>
      </Container>
  );
}

export default Schedules;
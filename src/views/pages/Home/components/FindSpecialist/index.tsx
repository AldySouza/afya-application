import React from 'react';

import { Container } from './styles';

import Button from '../../../../../components/Button';

const FindSpecialist: React.FC = () => {

  const handleClick = () => {
      console.log('click')
  }
  
  return (
      <Container>
          <div className="_find-specialist">
              <h1>Encontre um especialista<br/>
                  mais próximo de você</h1>
            
               <div className="_find-specialist-box">
                   <h4>Agendamento</h4>
                   <select name="especialidade">
                        <option>Especialidade</option>
                        <option value="dermatologista">Dermatologista</option>
                        <option value="cardiaco">Cardíaco</option>
                   </select>
                   <select name="tipo">
                        <option value="telemedicina">Telemedicina</option>
                        <option value="presencial">Presencial</option>
                    </select>
                    <Button onClick={() => handleClick}>Buscar</Button>
               </div>
          </div>
          <div className="_main-image"></div>
      </Container>
  );
}

export default FindSpecialist;
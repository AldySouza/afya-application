import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Button from '../../../../../components/Button';

const FindSpecialist: React.FC = () => {
  const [specialist, setSpecialist] = useState('');
  const [type, setType] = useState('');
  const [disable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    (specialist === '' || type === '') ? setDisable(true) : setDisable(false)
  }, [type, specialist])

  return (
      <Container>
          <div className="_find-specialist">
              <h1>Encontre um especialista<br/>
                  mais próximo de você</h1>
            
               <div className="_find-specialist-box">
                   <h4>Agendamento</h4>
                   <select name="especialidade" onChange={(e) => setSpecialist(e.target.value)}>
                        <option>Especialidade</option>
                        <option value="dermatologista">Dermatologista</option>
                        <option value="cardiaco">Cardíaco</option>
                   </select>
                   <select name="tipo" onChange={(e) => setType(e.target.value)}>
                        <option value="telemedicina">Telemedicina</option>
                        <option value="presencial">Presencial</option>
                    </select>
                    <Link
                        to={{
                            pathname: "/busca",
                            search: `?especialidade=${specialist}`,
                            hash: `#${type}`,
                            state: { fromDashboard: true }
                        }}
                    >
                        <Button disable={disable}>Buscar</Button>
                    </Link>
               </div>
          </div>
          <div className="_main-image"></div>
      </Container>
  );
}

export default FindSpecialist;
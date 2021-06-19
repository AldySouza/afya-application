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
          
          <div className="_main-image"></div>
      </Container>
  );
}

export default FindSpecialist;
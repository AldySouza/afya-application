import React from 'react';

import { Container } from './styles';

interface IProps {
    name: string,
    Tipo: string,
    H: string,
    src?: URL,
}

const Card: React.FC<IProps> = ({ name,  H, Tipo, src}) => {
  return (
      <Container>
          <div className="_card-left">
            <div className="_card-profile">
            <img src={src ? `${src}` : `https://avatars.abstractapi.com/v1/?api_key=070c28c252a947e9820bd80665cf3870&name=${name}`} className="_card-image" />
                <div className="_card-info">
                    <strong>Paciente</strong>
                    
                    <h4> {name}</h4>
                </div>
            </div>
            <div className="_card-location">
                <strong>Horario</strong>
                <p>{H}</p>
            </div>
            <div className="_card-location">
                <strong>Tipo</strong>
                <p>{Tipo}</p>
            </div>
          </div>
          <div className="_card-calendar"></div>
      </Container>
  );
}

export default Card;
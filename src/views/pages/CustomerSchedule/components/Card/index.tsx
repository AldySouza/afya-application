import React from 'react';

import { Container } from './styles';

interface IProps {
    mes: string,
    semana: string,
    H: string,
    src?: URL,
}

const Card: React.FC<IProps> = ({ mes, semana, H, src}) => {
  return (
      <Container>
          <div className="_card-left">
            <div className="_card-profile">
            <img src={src ? `${src}` : `https://avatars.abstractapi.com/v1/?api_key=070c28c252a947e9820bd80665cf3870&name=${mes}`} className="_card-image" />
                <div className="_card-info">
                    <span>{semana}</span>
                    <br/>
                    <h4>{mes}</h4>
                </div>
            </div>
            <div className="_card-location">
                <strong>Horario</strong>
                <p>{H}</p>
            </div>
          </div>
          <div className="_card-calendar"></div>
      </Container>
  );
}

export default Card;
import React from 'react';

import { Container } from './styles';

interface IProps {
    name: string,
    profession: string,
    address: string,
    src?: URL,
}

const Card: React.FC<IProps> = ({ name, profession, address, src}) => {
  return (
      <Container>
          <div className="_card-left">
            <div className="_card-profile">
            <img src={src ? `${src}` : `https://avatars.abstractapi.com/v1/?api_key=070c28c252a947e9820bd80665cf3870&name=${name}`} className="_card-image" />
                <div className="_card-info">
                    <span>{profession}</span>
                    <h4>Dr. {name}</h4>
                </div>
            </div>
            <div className="_card-location">
                <strong>Endereço</strong>
                <p>{address}</p>
            </div>
          </div>
          <div className="_card-calendar"></div>
      </Container>
  );
}

export default Card;
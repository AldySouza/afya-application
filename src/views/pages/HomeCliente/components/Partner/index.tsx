import React from 'react';

import { Container } from './styles';

import Slider from '../../../../../components/Slider';

const Partner: React.FC = () => {

  const images: string[] = [
    "https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/medcel.svg",
    "https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/ipemed.svg",
    "https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/iesvap.svg",
    "https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/uniptan.svg",
    "https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/sao_lucas_paranaji.svg",
    "https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/fmit.svg"
  ]
  
  return (
      <Container>
          <h2>Parceiros</h2>

          <Slider images={images} />
      </Container>
  );
}

export default Partner;
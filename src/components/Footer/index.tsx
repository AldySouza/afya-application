import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { FooterComponent } from './styles';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterComponent>
      <Logo />
      <ul>
        <strong>Sobre</strong>
         <li><a href="https://afya.com.br/nossa-historia" target="blank">Nossa História</a></li>
        <li><a href="https://afya.com.br/nossa-marca" target="blank">Nossa Marca</a></li>
        <li><a href="https://afya.com.br/cultura-e-gente" target="blank">Cultura e Gente</a></li>
        <li><a href="https://afya.com.br/corpo-docente" target="blank">Corpo Docente</a></li>
        <li><a href="https://afya.com.br/metodologia" target="blank">Metodologia Afya</a></li>
        <li><a href="https://afya.com.br/numeros-afya" target="blank">Números Afya</a></li>
        <li><a href="https://afya.com.br/unidades" target="blank">Unidades pelo Brasil</a></li>
        <li><a href="https://afya.com.br/programadeintegridade" target="blank">Programa de Integridade</a></li>
      </ul>
      <ul>
        <strong>Graduação</strong>
        <li><a href="https://afya.com.br/graduacao" target='blank'>Cursos de Graduação</a></li>
      </ul>
      <ul>
        <strong>
          Educação
          Continuada
        </strong>
        <li><a href="https://afya.com.br/preparatorio" target='blank'>Cursos Preparatórias</a></li>
        <li><a href="https://afya.com.br/pos-graduacao" target='blank'>Pós-Graduação</a></li>
      </ul>
    </FooterComponent>
  );
}

export default Footer;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { ReactComponent as LogoXG } from '../../../assets/logo-xg.svg';


const Register: React.FC = () => {
  const [form] = useState({});

  // const handleForm = (e: any) => {
  //   e.preventDefault();

  //   const { username, email, password } = document.forms[0];

  //   console.log(username.value, email.value, password.value);
  // }

  return (
    <Container>

      <div className="leftContainer">
        <form name="signin" className="signinForm">
          <LogoXG />
          <Input inputType="text" placeHolder="Digite seu nome completo" Name="name" />
          <Input inputType="text" placeHolder="Digite um username" Name="username" />
          <Input inputType="email" placeHolder="Digite seu e-mail" Name="email" />
          <Input inputType="email" placeHolder="Digite confirme seu e-mail" Name="confirm-email" />
          <Input inputType="password" placeHolder="Digite uma senha" Name="password" />
          <Input inputType="password" placeHolder="Digite confirme sua senha" Name="password" />
          
            <input type="radio" name="cliente" id="cliente" />Cliente
            <input type="radio" name="especialista" id="especialista" />Especialista
          

          <Link to="/registro-cliente">
            <Button>Próximo</Button>
          </Link>

          <span>Já tem cadastro? <Link to="/login"><strong>Entrar</strong></Link></span>
        </form>
      </div>

      <div className="rightContainer">
        <h1>
          Prencha os campos <br />
          e faça parte dessa <br />
          comunidade
        </h1>
        <LogoXG />
      </div>
    </Container>
  );
}

export default Register;
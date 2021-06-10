import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { ReactComponent as LogoXG } from '../../../assets/logo-xg.svg';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const RegisterClient: React.FC = () => {
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
          <Input inputType="text" placeHolder="Digite seu CPF" Name="cpf" />
          <Input inputType="text" placeHolder="Digite seu celular" Name="celular" />
          <Input inputType="email" placeHolder="Digite um telefone" Name="phone" />

          <select name="blood-type" id="">
            { bloodTypes.map((type) => <option value={type}>{ type }</option>) }
          </select>

          <Link to="/registro-endereco">
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

export default RegisterClient;
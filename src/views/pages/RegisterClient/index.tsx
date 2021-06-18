import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../RegisterProfessional/styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { ReactComponent as LogoXG } from '../../../assets/logo-xg.svg';
import Select from '../../../components/Select';
import { AxiosHttpClient } from '../../../helpers/httpClient/ajaxAdapter';
import { baseURL } from '../../../services/Utils';
import Validator from '../../../helpers/Validator';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const RegisterClient: React.FC = () => {
  const [error, setError] = useState({ message: '',
  isError: false});
  

   const handleForm = async (e: any) => {
     e.preventDefault();
  
   const { cpf, email, phone } = document.forms[0];

   if(Validator.isEmpty([cpf.value, email.value, phone.value])) {
    const error = {error: 'Verifique se preencheu todos os campos', isError: true };
    handleError(error);
    return;
}

const http = new AxiosHttpClient();
const { body, statusCode } = await http.request({
    url: `${baseURL}/sessions`,
    method: 'post',
    body: {
        "cpf": cpf.value,
        "email" : email.value,
        "phone": phone.value
        
    }
});

if(statusCode !== 200) {
    handleError(body);
    return;
}

try {
    const { token, user } = body;
    delete user.password;

    localStorage.setItem('@token', token);
    localStorage.setItem('@user', JSON.stringify(user));

    window.location.href = '/';
} catch(err) {
    console.log('An error occured');
}
    
   }

   const handleError = (body: any) => {
    setError({message: body.error, isError: true });

    setTimeout(() => {
        setError({message: '', isError: false });
    }, 3000)
}


  
  return (
    <Container>

      <div className="leftContainer">
        <form name="signin" className="signinForm">
          <LogoXG />
          { error.isError  && <span className="error">{error.message}</span> }
          <Input inputType="text" placeHolder="Digite seu CPF" Name="cpf" />
          <Input inputType="text" placeHolder="Digite seu celular" Name="phone"  />
          <Input inputType="email" placeHolder="Digite um telefone" Name="email" />

          <Select Name="blood-type" >
            { bloodTypes.map((type) => <option value={type}>{ type }</option>) }
          </Select>

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

function setError(arg0: { message: any; isError: boolean; }) {
  throw new Error('Function not implemented.');
}

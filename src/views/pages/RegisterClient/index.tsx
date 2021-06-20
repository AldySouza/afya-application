import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Container } from '../RegisterProfessional/styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { ReactComponent as LogoXG } from '../../../assets/logo-xg.svg';
import Select from '../../../components/Select';

import AuthContext from '../../../context/AuthContext';
import Validator from '../../../helpers/Validator';
import { baseURL } from '../../../services/Utils';
import { AxiosHttpClient } from '../../../helpers/httpClient/ajaxAdapter';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const RegisterClient: React.FC = () => {
  const [error, setError] = useState({
      message: '',
      isError: false
  });
  const [isDone, setIsDone] = useState<boolean>(false);
  const [client, setClient] = useState({});
  const { user } = useContext(AuthContext);

  const handleForm = async (e: any) => {
      e.preventDefault();
      const { cpf, celular, phone, bloodType } = document.forms[0];

      if(Validator.isEmpty([cpf.value, celular.value, phone.value, bloodType.value])) {
        const error = {error: 'Verifique se preencheu todos os campos', isError: true };
        handleError(error);
        return;
      }

      const res = await getRoles();

      setClient({
        cpf: cpf.value, 
        celular: celular.value, 
        telefone: phone.value, 
        tipo_sanguineo: bloodType.value, 
        name: user.name, 
        email: user.username,
        role: res?.body.id,
        users: user.id
      });

      setIsDone(true);
  }

  const handleError = (body: any) => {
    setError({message: body.error, isError: true });

    setTimeout(() => {
        setError({message: '', isError: false });
    }, 3000)
  }

  const getRoles = async () => {
    try {
      const http = new AxiosHttpClient();
      const { body, statusCode } = await http.request({
          url: `${baseURL}/roles/role_client`,
          method: 'get'
      });


      return { body, statusCode };

    } catch(error) {
      console.log(error);
    }
  }

  
  return (
    <Container>

      <div className="leftContainer">
        <form name="signin" className="signinForm">
          <LogoXG />
          { error.isError  && <span className="error">{error.message}</span> }
          <Input inputType="text" placeHolder="Digite seu CPF" Name="cpf" />
          <Input inputType="text" placeHolder="Digite seu celular" Name="celular"  />
          <Input inputType="text" placeHolder="Digite um telefone" Name="phone" />

          <Select Name="bloodType" >
            { bloodTypes.map((type, index) => <option value={index+1}>{ type }</option>) }
          </Select>

          {
            isDone ?
            <Redirect
                to={{
                pathname: "/registro-endereco",
                state: { prevData: client, path: "/clients" }
              }}
            />
            :
            <span onClick={(e) => handleForm(e)}>
              <Button>Próximo</Button>
            </span>
          }

          {/* <span>Já tem cadastro? <Link to="/login"><strong>Entrar</strong></Link></span> */}
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

import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Container } from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { ReactComponent as LogoXG } from '../../../assets/logo-xg.svg';
import AuthContext from '../../../context/AuthContext';
import Validator from '../../../helpers/Validator';
import { AxiosHttpClient } from '../../../helpers/httpClient/ajaxAdapter';
import { baseURL } from '../../../services/Utils';

const RegisterProfessional: React.FC = () => {
  const [error, setError] = useState({
      message: '',
      isError: false
  });
  const [isDone, setIsDone] = useState<boolean>(false);
  const [client, setClient] = useState({});
  const { user } = useContext(AuthContext);

  const handleForm = async (e: any) => {
      e.preventDefault();
      const { crm, celular, phone, profession } = document.forms[0];

      if(Validator.isEmpty([crm.value, celular.value, phone.value, profession.value])) {
        const error = {error: 'Verifique se preencheu todos os campos', isError: true };
        handleError(error);
        return;
      }

      const res = await getRoles();

      setClient({
        registro: crm.value, celular: celular.value, 
        telefone: phone.value, profissao: profession.value, 
        name: user.name, email: user.username,
        role: res?.body.id,
        id: user.id
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
          url: `${baseURL}/roles/role_specialist`,
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
          <Input inputType="text" placeHolder="Digite seu CRM" Name="crm" />
          <Input inputType="text" placeHolder="Digite seu celular" Name="celular" />
          <Input inputType="text" placeHolder="Digite um telefone" Name="phone" />
          <Input inputType="text" placeHolder="Digite sua profiss??o" Name="profession" />

          {
            isDone ?
            <Redirect
                to={{
                pathname: "/registro-endereco",
                state: { prevData: client, path: "/specialists"}
              }}
            />
            :
            <span onClick={(e) => handleForm(e)}>
              <Button>Pr??ximo</Button>
            </span>
          }

          {/* <span>J?? tem cadastro? <Link to="/login"><strong>Entrar</strong></Link></span> */}
        </form>
      </div>

      <div className="rightContainer">
        <h1>
          Prencha os campos <br />
          e fa??a parte dessa <br />
          comunidade
        </h1>
        <LogoXG />
      </div>
    </Container>
  );
}

export default RegisterProfessional;
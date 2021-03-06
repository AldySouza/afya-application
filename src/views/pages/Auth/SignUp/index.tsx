import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { ReactComponent as LogoXG } from '../../../../assets/logo-xg.svg';
import { AxiosHttpClient } from '../../../../helpers/httpClient/ajaxAdapter';
import { baseURL } from '../../../../services/Utils';
import Validator from '../../../../helpers/Validator';
import Loading from '../../../../components/Loading';

const SignUp: React.FC = () => {
    const [error, setError] = useState({
        message: '',
        isError: false
    });
    const [loading, setLoading] = useState<boolean>(false);

    const handleForm = async (e: any) => {
        e.preventDefault();

        const { username, email, password } = document.forms[0];

        if(Validator.isEmpty([username.value, email.value, password.value])) {
            const error = {message: 'Verifique se preencheu todos os campos', isError: true };
            handleError(error);
            return;
        }

        const res = await getRoles();

        setLoading(true);
        const http = new AxiosHttpClient();
        const { body, statusCode } = await http.request({
            url: `${baseURL}/users`,
            method: 'post',
            body: {
                "name": username.value,
                "username": email.value,
                "password": password.value,
                "roles": res?.body.id
            }
        });

        if(statusCode !== 200 && statusCode !== 201) {
            setLoading(false);
            handleError(body);
            return;
        }

        try {
            delete body.created_at;
            localStorage.setItem('@user', JSON.stringify(body));

            setLoading(false);
            window.location.href = '/login';
        } catch(err) {
            setLoading(false);
            console.log('An error occured');
        }

    }

    const handleError = (body: any) => {
        setError({message: body.message, isError: true });

        setTimeout(() => {
            setError({message: '', isError: false });
        }, 3000)
    }

    const getRoles = async () => {
        try {
          const http = new AxiosHttpClient();
          const { body, statusCode } = await http.request({
              url: `${baseURL}/roles/role_user`,
              method: 'get'
          });
    
    
          return { body, statusCode };
    
        } catch(error) {
          console.log(error);
        }
      }

    return (
        <Container>
            { loading && <Loading />}
            <div className="leftContainer">
                <h1>Crie sua conta<br />
                    e aproveite<br />
                    todos os<br />
                    benef??cios
                </h1>
                <LogoXG />
            </div>

            <div className="rightContainer">
                <form name="signin" className="signinForm">
                    <LogoXG />
                    { error.isError  && <span className="error">{error.message}</span> }
                    <Input placeHolder="Digite seu nome" Name="username" />
                    <Input inputType="email" placeHolder="Digite seu e-mail" Name="email" />
                    <Input inputType="password" placeHolder="Digite sua senha" Name="password" />

                    <Button
                        onClick={(e) => handleForm(e)}
                    >
                        Cadastrar
                    </Button>


                    <span>J?? tem cadastro? <Link to="/login"><strong>Entrar</strong></Link></span>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;
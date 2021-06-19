import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import { AxiosHttpClient } from '../../../../helpers/httpClient/ajaxAdapter';

import { ReactComponent as LogoXG } from '../../../../assets/logo-xg.svg';
import { baseURL } from '../../../../services/Utils';
import Validator from '../../../../helpers/Validator';
import Loading from '../../../../components/Loading';

const Sign: React.FC = () => {
    const [error, setError] = useState({
        message: '',
        isError: false
    });

    const [loading, setLoading] = useState<boolean>(false);

    const handleForm = async (e: any) => {
        e.preventDefault();

        const { username, password } = document.forms[0];

        if(Validator.isEmpty([username.value, password.value])) {
            const error = {error: 'Verifique se preencheu todos os campos', isError: true };
            handleError(error);
            return;
        }

        setLoading(true);
        const http = new AxiosHttpClient();
        const { body, statusCode } = await http.request({
            url: `${baseURL}/sessions`,
            method: 'post',
            body: {
                "username": username.value,
                "password": password.value
            }
        });

        if(statusCode !== 200) {
            setLoading(false);
            handleError(body);
            return;
        }

        try {
            const { token, user } = body;
            delete user.password;

            localStorage.setItem('@token', token);
            localStorage.setItem('@user', JSON.stringify(user));

            setLoading(false);
            window.location.href = '/';
        } catch(err) {
            setLoading(false);
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
            { loading && <Loading />}
            <div className="leftContainer">
                <h1>Entre<br/>
                    e aproveite<br/>
                    todos os<br/>
                    benefícios
                </h1>
                <LogoXG />
            </div>

            <div className="rightContainer">
                <form name="signin" className="signinForm">
                    <LogoXG />
                    { error.isError  && <span className="error">{error.message}</span> }
                    <Input inputType="email" placeHolder="Digite seu email" Name="username"  />
                    <Input inputType="password" placeHolder="Digite sua senha" Name="password" />

                    <Button onClick={(e) => handleForm(e)}><Link to="/especialista">Entrar</Link></Button>

                    <span>Não tem cadastro? <Link to="/cadastro"><strong>Cadastrar</strong></Link></span>
                </form>
            </div>
        </Container>
    );
}

export default Sign;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { ReactComponent as LogoXG } from '../../../../assets/logo-xg.svg';

const SignUp: React.FC = () => {
    const [form, setForm] = useState({});

    const handleForm = (e: any) => {
        e.preventDefault();

        const { username, email, password } = document.forms[0];

        console.log(username.value, email.value, password.value);
    }


    return (
        <Container>
            <div className="leftContainer">
                <h1>Crie sua conta<br />
                    e aproveite<br />
                    todos os<br />
                    benefícios
                </h1>
                <LogoXG />
            </div>

            <div className="rightContainer">
                <form name="signin" className="signinForm">
                    <LogoXG />
                    <Input inputType="text" placeHolder="Digite seu nome" Name="username" />
                    <Input inputType="email" placeHolder="Digite seu e-mail" Name="email" />
                    <Input inputType="password" placeHolder="Digite sua senha" Name="password" />

                    <Link to="/registro">
                        <Button onClick={(e) => handleForm(e)}>Cadastrar</Button>
                    </Link>


                    <span>Já tem cadastro? <Link to="/login"><strong>Entrar</strong></Link></span>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;
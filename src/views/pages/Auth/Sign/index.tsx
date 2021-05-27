import React, { useState } from 'react';

import { Container } from './styles';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { ReactComponent as LogoXG } from '../../../../assets/logo-xg.svg';

const Sign: React.FC = () => {
    const [form, setForm] = useState({});

    const handleForm = (e: any) => {
        e.preventDefault();

        const { email, password } = document.forms[0];

        console.log(email.value, password.value);
    }


    return (
        <Container>
            <div className="leftContainer">
                <h1>Crie sua conta<br/>
                        e aproveite<br/>
                            todos os<br/>
                            benefícios
                </h1>
                <LogoXG />
            </div>

            <div className="rightContainer">
                <form name="signin" className="signinForm">
                    <LogoXG />
                    <Input inputType="email" placeHolder="Digite seu e-mail" Name="email" />
                    <Input inputType="password" placeHolder="Digite sua senha" Name="password" />

                    <Button onClick={(e) => handleForm(e)}>Entrar</Button>

                    <span>Já tem cadastro? <strong>Entrar</strong></span>
                </form>
            </div>
        </Container>
    );
}

export default Sign;
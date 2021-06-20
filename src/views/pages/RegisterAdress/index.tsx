import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { ReactComponent as LogoXG } from '../../../assets/logo-xg.svg';

import { baseURL } from '../../../services/Utils';
import Validator from '../../../helpers/Validator';
import { AxiosHttpClient } from '../../../helpers/httpClient/ajaxAdapter';
import ButtonOutline from '../../../components/ButtonOutline';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading';

interface IClient {
  id: string
}

const RegisterAdress: React.FC = () => {
  const [client, setClient] = useState<IClient>();
  const [address, setAddress] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  
  const [error, setError] = useState({
    message: '',
    isError: false
  });

  useEffect(() => {
    const prevData = window.history.state.state.prevData;
    setClient(prevData);
    console.log(prevData)
  },[])


  const handleForm = async (e: any) => {
      e.preventDefault();
      const { cep, logradouro, number, district, city, uf } = document.forms[0];

      if(Validator.isEmpty([cep.value, logradouro.value, number.value, district.value, city.value, uf.value])) {
        const error = {error: 'Verifique se preencheu todos os campos', isError: true };
        handleError(error);
        return;
      }

      const address = {
        cep: cep.value, 
        logradouro: logradouro.value, 
        numero: number.value,
        localidade: city.value, 
        bairro: district.value, 
        uf: uf.value,
        users: client?.id
      }

      setAddress(address);
      setLoading(true);

      const http = new AxiosHttpClient();

      try {
        const { body, statusCode } = await http.request({
            url: `${baseURL}${window.history.state.state.path}`,
            method: 'post',
            body: client
        });

        if(statusCode === 201) {
          const { body, statusCode } = await http.request({
            url: `${baseURL}/addresses`,
            method: 'post',
            body: address
          });

          if(statusCode === 201) {
            setLoading(false);
            window.location.href = '/busca';
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

  }

  const handleError = (body: any) => {
    setError({message: body.error, isError: true });

    setTimeout(() => {
        setError({message: '', isError: false });
    }, 3000)
  }
  
  const handleCEP = async (cep: string)  => {
    if(cep.length >= 8) {
      setLoading(true);
      cep = cep.split('-').join('');
      let delayTyping: any = 0;

      clearTimeout(delayTyping);
      delayTyping = setTimeout(async function() {
        const http = new AxiosHttpClient();
        const { body, statusCode } = await http.request({
            url: `${baseURL}/zippcode/${cep}`,
            method: 'get'
        });

        setLoading(false);
        statusCode == 200 && setAddress(body);
      }, 2000);
    }
  }
  
  const saveClient = async (client: any) => {
    const http = new AxiosHttpClient();
    const { body, statusCode } = await http.request({
        url: `${baseURL}/clients`,
        method: 'post',
        body: client
    });

    return statusCode === 200 ? { body, statusCode } : handleError({error: 'Houve um erro, tente novamente!', isError: true });
  }

  const saveAddress = async (address: any) => {
    const http = new AxiosHttpClient();
      const { body, statusCode } = await http.request({
          url: `${baseURL}/addresses`,
          method: 'post',
          body: address
      });

      return statusCode === 200 ? body : handleError({error: 'Houve um erro, tente novamente!', isError: true });
  }

  return (
    <Container>
      { loading && <Loading />}
      <div className="leftContainer">
        <form name="signin" className="signinForm">
          <LogoXG />
          { error.isError  && <span className="error">{error.message}</span> }
          <Input inputType="text" placeHolder="Digite seu CEP" Name="cep"
            onChange={(e) => handleCEP(e.target.value)}
          />
        <Input inputType="text" placeHolder="Digite seu endereço" Name="logradouro"/>
          <Input inputType="text" placeHolder="Digite seu número" Name="number" />
          <Input inputType="text" placeHolder="Digite seu bairro" Name="district"/>
          <Input inputType="text" placeHolder="Digite sua cidade" Name="city" Value={address?.localidade} />
          <Input inputType="text" placeHolder="Digite seu estado" Name="uf" Value={address?.uf}/>

          <div>
            <span onClick={(e) => handleForm(e)}>
              <Button>Finalizar</Button>
            </span>

            <Link to={window.history.state.state.path == '/clients' ? '/registro-cliente':'registro-profissional'}>
              <ButtonOutline>Voltar</ButtonOutline>
            </Link>
          </div>

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

export default RegisterAdress;

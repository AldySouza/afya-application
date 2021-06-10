import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { ReactComponent as LogoXG } from '../../../assets/logo-xg.svg';
// import { IResponse } from '../../../components/Header/interfaces';
// import axios from 'axios';

const RegisterAdress:
 React.FC = () => {
  // const [cep, setCep] = useState<IResponse[]>([]);

  // useEffect(() => {
  //   getCep();
  // }, []);

  // // const getCep = async () => {
  // //   const cepJson = await axios.get('https://viacep.com.br/ws/09040140/json/s');
  // //   setCep(cepJson);
  // // }
   
  //  console.log(cep);
  
  return (
    <Container>

      <div className="leftContainer">
        <form name="signin" className="signinForm">
          <LogoXG />
          <Input inputType="text" placeHolder="Digite seu CEP" Name="cep" />
          <Input inputType="text" placeHolder="Digite seu endereço" Name="logradouro" />
          <Input inputType="text" placeHolder="Digite seu número" Name="number" />
          <Input inputType="text" placeHolder="Complemento opcional" Name="complement" />
          <Input inputType="text" placeHolder="Digite seu bairro" Name="district" />
          <Input inputType="text" placeHolder="Digite sua cidade" Name="city" />
          <select name="state" id="">

          </select>

          <Link to="/login">
            <Button>Finalizar</Button>
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

export default RegisterAdress;

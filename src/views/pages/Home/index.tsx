import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FindSpecialist from './components/FindSpecialist';
import Partner from './components/Partner';
import Schedules from './components/Schedules';

import { HomeComponent } from "./styles";
import { AxiosHttpClient } from '../../../helpers/httpClient/ajaxAdapter';
import { baseURL } from '../../../services/Utils';

interface ISpecialist {
  celular: string,
  email: string,
  id: string,
  name: string,
  registro: string,
  telefone: string
}

const Home: React.FC = () => {
  const [specialists, setSpecialists] = useState<ISpecialist[]>()
  useEffect(() => {
    getSpecialists(); 
  }, []);

  const getSpecialists = async () => {
    const http = new AxiosHttpClient();

    const {body, statusCode } = await http.request({
      url: `${baseURL}/specialists`,
      method: 'get'
    });

    statusCode == 200 ? setSpecialists(body) : setSpecialists([]);
  }

  return (
    <HomeComponent>
      <Header />
      <section>
        <FindSpecialist />
        <Partner />
        {
          specialists && specialists?.length > 0 ?
            specialists.map(specialist => {
              return <Schedules title={specialist.name} value={360}/>
            })
          :
          <h1>Nenhum especialista cadastrado ainda</h1>
        }
      </section>
      <Footer />
    </HomeComponent>
  );
}

export default Home
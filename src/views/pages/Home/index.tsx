import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FindSpecialist from './components/FindSpecialist';
import Partner from './components/Partner';
import Schedules from './components/Schedules';

import { HomeComponent } from "./styles";

const Home: React.FC = () => {

  return (
    <HomeComponent>
      <Header />
      <section>
        <FindSpecialist />
        <Partner />
        <Schedules title="Cardiologista" value={355} />
        <Schedules title="Cardiologista" value={755}/>
      </section>
      <Footer />
    </HomeComponent>
  );
}

export default Home
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
        <Schedules title="Dermatologia - online" value={349.99}/>
        <Schedules title="Cardiologia - online" value={549.99}/>
      </section>
      <Footer />
    </HomeComponent>
  );
}

export default Home;
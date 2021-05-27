import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { HomeComponent } from "./styles";

const Home: React.FC = () => {

  return (
    <HomeComponent>
      <Header />
      <h1>Home</h1>
      <Footer />
    </HomeComponent>
  );
}

export default Home;
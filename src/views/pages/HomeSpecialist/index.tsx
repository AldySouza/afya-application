import React from 'react';

import Header from '../../../components/HeaderSpecialista';
import Footer from '../../../components/Footer';
import FindSpecialist from './components/FindSpecialist';
import Partner from './components/Partner';

import { HomeComponent } from "./styles";
import Modal from '../../../components/Modal';
import { useState } from 'react';

const HomeSpecialist: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HomeComponent>
      <Header />
      <button onClick={() => { setIsOpen(true)}}>click me</button>
      <section>
        <FindSpecialist />
        <Partner />
        
      </section>
      <Footer />
      <Modal 
        title="Modal title"
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <input placeholder="TExto"/>
        <button>SEnd</button>
      </Modal>
    </HomeComponent>
  );
}

export default HomeSpecialist;
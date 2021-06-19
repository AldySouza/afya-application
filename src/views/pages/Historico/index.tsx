import React, { useEffect, useState } from 'react';
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import Header from '../../../components/HeaderSpecialista';
import Footer from '../../../components/Footer';
import Modal from '../../../components/Modal';

import { HistoComponent } from './styles';
import Partner from './components/Partner';
import Schedules from './components/Schedules';




const Pacientes: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HistoComponent>
      <Header />
      <button onClick={() => { setIsOpen(true)}}>click me</button>
      <section>
        
        <Partner />
        <Schedules />
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
      </HistoComponent>
  );
}

export default Pacientes;
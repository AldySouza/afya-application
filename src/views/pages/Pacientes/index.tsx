import React, { useEffect, useState } from 'react';
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import Header from '../../../components/HeaderSpecialista';
import Footer from '../../../components/Footer';
import Modal from '../../../components/Modal';
import Schedules from './component/Schedules';
import Partner from './component/Partner';
import { PaciComponent } from './styles';




const Pacientes: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <PaciComponent>
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
      </PaciComponent>
  );
}

export default Pacientes;
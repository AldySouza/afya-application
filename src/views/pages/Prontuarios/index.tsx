import React, { useState }  from 'react';
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import Header from '../../../components/HeaderSpecialista';
import Footer from '../../../components/Footer';




import Pin from '../../../assets/pin.svg';

import { Link } from 'react-router-dom';
import ButtonOutline from '../../../components/ButtonOutline';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import Schedules from './components/Schedules';
import Partner from './components/Partner';
import { ProtoComponent } from './styles';

const Prontuarios: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ProtoComponent>
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
      </ProtoComponent>
  );
}

export default Prontuarios;
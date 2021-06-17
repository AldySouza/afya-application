import React, { useEffect, useState } from 'react';
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Card from './components/Card';

import { Container, SearchBar } from './styles';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import Pin from '../../../assets/pin.svg';

const CustomerSchedule: React.FC = () => {
  const [query, setQuery] = useState(''); 
  const [hash, setHash] = useState('');

  const API_KEY = "pk.eyJ1IjoiYnJlbm9nY290YSIsImEiOiJja3BrMDA5b3MwZXQ3MnBydDc4ODRuM284In0._VgelmZhtWi7lAneRalSFA";

  useEffect(() => {
      const hash = window.location.hash;
      const query = window.location.search;
      
      console.log(hash, query)
  }, [])

  const fetchLocalMapBox = (local: string) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => console.log(data));

  }

  const initialPosition = { lat: -22.2154042, lng: -54.8331331 };
  const [location, setLocation] = useState(initialPosition);
  
  //  const mapPackageIcon = Leaflet.icon({
  //    iconUrl: mapPackage,
  //    iconSize: [58, 68],
  //    iconAnchor: [29, 68],
  //    popupAnchor: [170, 2],
  //  });

   const mapPinIcon = Leaflet.icon({
     iconUrl: Pin,
     iconSize: [58, 68],
     iconAnchor: [29, 68],
     popupAnchor: [170, 2],
   });

  return (
      <Container>
        <Header />

       


          <main className="_main-container">
            {/* <div id="page-map">
              <MapContainer
                  center={location}
                  zoom={15}
                  style={{ width: "100%", height: "100%" }}
                >
                  <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${API_KEY}`}
                  />
          
                    <Marker
                      icon={mapPinIcon}
                      position={[location.lat, location.lng]}
                    ></Marker>
          
                </MapContainer>
            </div> */}

            <div>
            <Card mes="Julho" semana="quinta" H= "16h dia 22 " />
              <Card mes="Agosto" semana="sexta" H="12h dia 07 "/>
              <Card mes="Setembro" semana="Quarta" H="13h dia 01  " />
            </div>
          </main>
              
        <Footer />
      </Container>
  );
}

export default CustomerSchedule;
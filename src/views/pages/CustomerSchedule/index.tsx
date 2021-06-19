import React, { useEffect, useState } from 'react';
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import Header from '../../../components/HeaderCliente';
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

          <SearchBar>
            <input type="search" name="search" onChange={(e) => fetchLocalMapBox(e.target.value)}/>
            <div className="_search-icon">
              <SearchIcon />
            </div>
          </SearchBar>


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
            <Card name="Marcos Alves" profession="Ortopedista" H=  " 02/07/2021: 8h as 12h " />
              <Card name="Douglas Morais" profession="Cardiologista" H=" 16/07/2021: 12h as 15h"/>
              <Card name="Breno Cota" profession="Cardiologista" H=" 22/07/2021: 13h as 12h" />
            </div>
          </main>
              
        <Footer />
      </Container>
  );
}

export default CustomerSchedule;
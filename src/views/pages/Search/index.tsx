import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Card from './components/Card';

import { Container, SearchBar } from './styles';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import Pin from '../../../assets/pin.svg';
import { baseURL } from '../../../services/Utils';
import { AxiosHttpClient } from '../../../helpers/httpClient/ajaxAdapter';


interface ISpecialist {
  celular: string,
  email: string,
  id: string,
  name: string,
  registro: string,
  telefone: string
}

const Search: React.FC = () => {
  const [query, setQuery] = useState(''); 
  const [hash, setHash] = useState('');

  const [specialists, setSpecialists] = useState<ISpecialist[]>()

  useEffect(() => {
      const hash = window.location.hash;
      const query = window.location.search;
      
      console.log(hash, query);
      getSpecialists(); 
  }, [])

  const getSpecialists = async () => {
    const http = new AxiosHttpClient();

    const {body, statusCode } = await http.request({
      url: `${baseURL}/specialists`,
      method: 'get'
    });

    statusCode == 200 ? setSpecialists(body) : setSpecialists([]);
  }

  return (
      <Container>
        <Header />

          <SearchBar>
            <input type="search" name="search" onChange={(e) => console.log(e.target.value)}/>
            <div className="_search-icon">
              <SearchIcon />
            </div>
          </SearchBar>


          <main className="_main-container">
            <div>
            {
          specialists && specialists?.length > 0 ?
            specialists.map(specialist => {
              return <Card name={specialist.name} profession="Ortopedista" address="Rua Carlos Prates" />
              })
              :
              <h1>Nenhum especialista cadastrado ainda</h1>
            }
            </div>
          </main>
              
        <Footer />
      </Container>
  );
}

export default Search;
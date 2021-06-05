import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Card from './components/Card';

import { Container, SearchBar } from './styles';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';

const Search: React.FC = () => {
  const [query, setQuery] = useState(''); 
  const [hash, setHash] = useState('');

  useEffect(() => {
      const hash = window.location.hash;
      const query = window.location.search;
      
      console.log(hash, query)
  }, [])

  return (
      <Container>
        <Header />

          <SearchBar>
            <input type="search" name="search"/>
            <div className="_search-icon">
              <SearchIcon />
            </div>
          </SearchBar>

          <Card name="Marcos Alves" profession="Ortopedista" address="Rua Carlos Prates" />
          <Card name="Douglas Morais" profession="Cardiologista" address="Rua Carlos F. Costa" />
          <Card name="Breno Cota" profession="Cardiologista" address="Rua Carlos F. Costa" />


        <Footer />
      </Container>
  );
}

export default Search;
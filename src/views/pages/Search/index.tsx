import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

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
            <input type="search" name="search" />
            <div className="_search-icon">
              <SearchIcon />
            </div>
          </SearchBar>

        <Footer />
      </Container>
  );
}

export default Search;
import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// import { Container } from './styles';

const Search: React.FC = () => {
  const [query, setQuery] = useState(''); 
  const [hash, setHash] = useState('');

  useEffect(() => {
      const hash = window.location.hash;
      const query = window.location.search;
      
      console.log(hash, query)
  }, [])

  return (
      <>
        <Header />
        <Footer />
      </>
  );
}

export default Search;
import React, { useContext, useEffect, useState } from 'react';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {

  return (
    <AuthProvider>
      <Routes/>
      <GlobalStyles/>
    </AuthProvider>
  );
}

export default App;
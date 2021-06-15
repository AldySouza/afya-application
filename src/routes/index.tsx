import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/pages/Home';
import Search from '../views/pages/Search';
import Sign from '../views/pages/Auth/Sign';
import SignUp from '../views/pages/Auth/SignUp';

import AuthContext from '../context/AuthContext';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/busca" component={Search}/>
        {
          !signed &&
            <>
              <Route path="/login" component={Sign}/>
              <Route path="/cadastro" component={SignUp}/>
            </>
        }
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
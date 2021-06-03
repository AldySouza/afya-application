import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/pages/Home';
import Sign from '../views/pages/Auth/Sign';
import SignUp from '../views/pages/Auth/SignUp';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Sign}/>
        <Route path="/cadastro" component={SignUp}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
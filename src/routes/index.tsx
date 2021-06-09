import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/pages/Home';
import Search from '../views/pages/Search';
import Sign from '../views/pages/Auth/Sign';
import SignUp from '../views/pages/Auth/SignUp';
import Register from '../views/pages/Register';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/busca" component={Search}/>
        <Route path="/login" component={Sign}/>
        <Route path="/cadastro" component={SignUp}/>
        <Route path="/registro" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
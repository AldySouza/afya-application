import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/pages/Home';
import Search from '../views/pages/Search';
import Sign from '../views/pages/Auth/Sign';
import SignUp from '../views/pages/Auth/SignUp';
import Register from '../views/pages/Register';
import RegisterClient from '../views/pages/RegisterClient';
import RegisterProfessional from '../views/pages/RegisterClient';
import RegisterAdress from '../views/pages/RegisterAdress';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/busca" component={Search}/>
        <Route path="/login" component={Sign}/>
        <Route path="/cadastro" component={SignUp}/>
        <Route path="/registro" component={Register}/>
        <Route path="/registro-cliente" component={RegisterClient}/>
        <Route path="/registro-profissional" component={RegisterProfessional}/>
        <Route path="/registro-endereco" component={RegisterAdress}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
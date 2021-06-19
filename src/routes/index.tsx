import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/pages/Home';
import Search from '../views/pages/Search';
import Sign from '../views/pages/Auth/Sign';
import SignUp from '../views/pages/Auth/SignUp';
import Register from '../views/pages/Register';
import RegisterClient from '../views/pages/RegisterClient';
import RegisterProfessional from '../views/pages/RegisterProfessional';
import RegisterAdress from '../views/pages/RegisterAdress';
import CustomerSchedule from '../views/pages/CustomerSchedule';
import Scheduling from '../views/pages/Scheduling';
import SchedulingSpecialista from '../views/pages/SchedulingSpecialista';
import HomeClente from '../views/pages/HomeCliente';
import HomeSpecialist from '../views/pages/HomeSpecialist';
import Calendario from '../views/pages/Calendario';
import Historico from '../views/pages/Historico';
import Pacientes from '../views/pages/Pacientes';
import Prontuarios from '../views/pages/Prontuarios';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cliente" exact component={HomeClente}/>
        <Route path="/especialista" exact component={HomeSpecialist}/>
        <Route path="/busca" component={Search}/>
        <Route path="/login" component={Sign}/>
        <Route path="/cadastro" component={SignUp}/>
        <Route path="/registro" component={Register}/>
        <Route path="/registro-cliente" component={RegisterClient}/>
        <Route path="/registro-profissional" component={RegisterProfessional}/>
        <Route path="/registro-endereco" component={RegisterAdress}/>
        <Route path="/Agendar" component={CustomerSchedule}/>
        <Route path="/agendados" component={SchedulingSpecialista}/>
        <Route path="/Agendamentos" component={Scheduling}/>
        <Route path="/Calendario" component={Calendario}/>
        <Route path="/Historico" component={Historico}/>
        <Route path="/Pacientes" component={Pacientes}/>
        <Route path="/Prontuarios" component={Prontuarios}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
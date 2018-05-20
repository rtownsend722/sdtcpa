import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import About from './about/About';
import Calendar from './calendar/Calendar';
import FeeSchedule from './feeSchedule/FeeSchedule';
import Services from './services/Services';
import Tools from './tools/Tools';
import Err from './err/Err.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/feeSchedule' component={FeeSchedule} />
      <Route path='/services' component={Services} />
      <Route path='/tools' component={Tools} />
      <Route component={Err} />
    </Switch>
  </BrowserRouter>
);

export default Router;
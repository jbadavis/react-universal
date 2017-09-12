import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Lists from './pages/Lists/Lists';
import Error from './pages/Error/Error';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/lists' component={ Lists } />
      <Route path='*' component= { Error } />
    </Switch>
  );
};

export default Routes;

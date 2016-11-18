import React from 'react';

import {Router, Route, hashHistory } from 'react-router';

import App from './Components/Containers/App';
import Signup from './Components/Signup';

const router = (

    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Router path="/register" component={Signup}/>
    </Router>

);

export default router;

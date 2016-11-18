import React from 'react';
import {Router, Route, hashHistory } from 'react-router';
// import $ from 'jquery';


import config from './config';
import App from './Components/Containers/App';
import Signup from './Components/Signup';
import SearchPage from './Components/SearchPage';


const router = (

    <Router history={hashHistory}>
      <Route path='/' component={App}/>
      <Route path='/register' component={Signup}/>
      <Route path='/search' component={SearchPage}/>
    </Router>

);

export default router;

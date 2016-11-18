import React from 'react';
import {Router, Route, hashHistory } from 'react-router';
// import $ from 'jquery';


import config from './config';
// import App from './Components/Containers/App';
import Signup from './Components/Signup';
import SearchPage from './Components/SearchPage';
import Nav from './Components/Nav';
import Login from './Components/Login';
import VotesPage from './Components/VotesPage';


const router = (

    <Router history={hashHistory}>
      <Route path='/' component={Nav}>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Signup}/>
      <Route path='/search' component={SearchPage}/>
      <Route path='/votes' component={VotesPage}/>
      </Route>
    </Router>

);

export default router;

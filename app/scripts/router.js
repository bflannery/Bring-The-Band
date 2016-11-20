import React from 'react';
import {Router, Route, hashHistory } from 'react-router';
import $ from 'jquery';


import config from './config';
import Signup from './Components/Signup';
import SearchPage from './Components/Containers/SearchPage';
import LandingPage from './Components/Containers/LandingPage';
import VotesPage from './Components/Containers/VotesPage';


$(document).ajaxSend((evt, xhr, opts) => {
  if(opts.url.indexOf('spotify') === -1) {


    console.log('interception son');
    console.log(opts.type);

    xhr.setRequestHeader('application-id', config.appId);
    xhr.setRequestHeader('secret-key', config.secretKey);
    xhr.setRequestHeader('application-type', 'REST');


  }
})

const router = (

    <Router history={hashHistory}>
      <Route path='/' component={LandingPage}/>
      <Route path='/register' component={Signup}/>
      <Route path='/search' component={SearchPage}/>
      <Route path='/votes' component={VotesPage}/>

    </Router>

);

export default router;

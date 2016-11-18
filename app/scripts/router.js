import React from 'react';
import {Router, Route, hashHistory } from 'react-router';
import $ from 'jquery';


import config from './config';
import App from './Components/Containers/App';
import Signup from './Components/Signup';
import Search from './Components/Search';


$(document).ajaxSend((evt, xhr, opts) => {

    console.log('interception son');
    console.log(opts.type);

    xhr.setRequestHeader('application-id', config.appId);
    xhr.setRequestHeader('secret-key', config.secretKey);
    xhr.setRequestHeader('application-type', 'REST');

    if(window.localStorage.getItem('user-token')){
      this.set('user-token' , window.localStorage.getItem('user-token'));
    }
});

const router = (

    <Router history={hashHistory}>
      <Route path='/' component={App}/>
      <Route path='/register' component={Signup}/>
      <Route path='/search' component={Search}/>
    </Router>

);

export default router;

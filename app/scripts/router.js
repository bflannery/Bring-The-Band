import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import $ from 'jquery';


import config from './config';
import Signup from './Components/Signup';
import App from './Components/Containers/App';
import SearchPage from './Components/Containers/SearchPage';
import LandingPage from './Components/Containers/LandingPage';
import VotesPage from './Components/Containers/VotesPage';


const router = (

    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path='/register' component={Signup}/>
        <Route path='/search' component={SearchPage}/>
        <Route path='/votes' component={VotesPage}/>
      </Route>

    </Router>

);

export default router;

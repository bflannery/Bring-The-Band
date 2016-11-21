import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import SignUp from './SignUp';

export default React.createClass ({
  render () {

    return (
      <div className="login-form-container">
      <form className="login-form">
        <input className="login-container" id="userName-login" type="name" placeholder="Username"/>
        <input className="login-container" id="userName-password" type="password" placeholder="Password"/>
        <input onClick={this.handleSubmit} type="submit" value="Login"/>
      </form>
      Not a Member?  <Link to="/register">Signup Here!</Link>
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    const userName = document.getElementById('userName-login').value;
    const password = document.getElementById('userName-password').value;
    store.session.login(userName, password);
  }
})

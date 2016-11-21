import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import SignUp from './SignUp';

export default React.createClass ({
  render () {

    return (
      <div className="login-form-container">
      <form onSubmit={this.handleSubmit} className="login-form" >
        <input className="login-container" ref="login" id="userName-login" type="name" placeholder="Username"/>
        <input className="login-container" ref="password" id="userName-password" type="password" placeholder="Password"/>
        <input type="submit" value="Login"/>
      </form>
      Not a Member?  <Link to="/register">Signup Here!</Link>
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    const userName = this.refs.login.value;
    const password = this.refs.password.value;
    store.session.login(userName, password);
  }
})

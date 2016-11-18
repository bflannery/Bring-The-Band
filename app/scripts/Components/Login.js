import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import SignUp from './SignUp';

export default React.createClass ({
  render () {
    console.log(this.props)
    return (
      <div>
      <form>
        <input className="userName-login" type="name" placeholder="Username"/>
        <input className="password-login" type="password" placeholder="Password"/>
        <input onClick={this.handleSubmit} type="submit" value="Login"/>
      </form>
      Not a Member?  <Link to="/register">Signup Here!</Link>
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    const userName = document.querySelector('.userName-login').value;
    const password = document.querySelector('.password-login').value;
    store.session.login(userName, password);
  }
})

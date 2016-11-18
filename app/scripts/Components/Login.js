import React from 'react';
import {Link} from 'react-router';
import store from '../store';

export default React.createClass ({
  render () {
    return (
      <div>
      <form>
        <input className="email-login" type="email" placeholder="Email"/>
        <input className="password-login" type="password" placeholder="Password"/>
        <input onClick={this.handleSubmit} type="submit" value="Login"/>
      </form>
      Not a Member?  <Link to="/register">Signup Here!</Link>
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    const email = document.querySelector('.email-login').value;
    const password = document.querySelector('.password-login').value;
    store.session.login(email, password);
  }
})

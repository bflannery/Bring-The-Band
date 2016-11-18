import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import SignUp from './SignUp';

export default React.createClass ({

  getInitialState(){
    return {
      session: store.session.toJSON(),
    }
  },
  componentWillMount(){
    store.session.on('change', ()=> {
      this.setState({session: store.session.toJSON()})
    });
  },

  render () {
  
    return (
      <div>
      <h1> Bring The Band </h1>
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

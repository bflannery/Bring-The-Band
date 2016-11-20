import React from 'react';

import store from '../../store';

import Login from '../Login';
import Header from '../Header';

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
      <Header />
      <Login session={this.state.session} />
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

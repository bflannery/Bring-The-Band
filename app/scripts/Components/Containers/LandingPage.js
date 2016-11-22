import React from 'react';

import store from '../../store';

import Login from '../Login';
 
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
      <div className="landing-page">
      <div className="main-container">
      <Login session={this.state.session} />
      </div>
      </div>
    );
  },
});

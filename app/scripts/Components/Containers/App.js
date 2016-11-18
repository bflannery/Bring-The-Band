import React from 'react';
import {Link} from 'react-router';
import store from '../../store';
import Login from '../Login';

export default React.createClass({
  getInitialState(){
    return {
      session: store.session.toJSON()
    }
  },
  componentWillMount(){
    store.session.on('change', ()=> {
      this.setState({session: store.session.toJSON()})
    });
  },
  render(){
      return (
        <div>
          <h1>Bring The Band!</h1>
          <Login login={this.state.session}/>
        </div>
      );
  }

});

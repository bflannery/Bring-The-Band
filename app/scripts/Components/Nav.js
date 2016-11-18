import React from 'react';
import { Link } from 'react-router';
import store from '../store';


export default React.createClass({
    render() {

      let nav;

      if(!window.localStorage.userName) {
        nav = (
          <nav>
            <Link to = "login">Log In</Link>
            <Link to = "register">Register</Link>
          </nav>
        )
      } else {
        nav = (
          <div>
          <nav>
            <Link to = "votes">Votes</Link>
            <Link to = "search">Search</Link>
          </nav>
          <input type="button" onClick={this.handleLogOut} value="log out"/>
          </div>
        )
      }
        return (
          <div>
              {nav}
              {this.props.children}
          </div>
      );
    },

    handleLogOut (e) {
      e.preventDefault
      store.session.logout();
    }
});

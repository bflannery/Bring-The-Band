import React from 'react';
import { Link } from 'react-router';
import store from '../store';


export default React.createClass({
    render() {

      let nav;

      if(!window.localStorage.userName) {
        nav = (
          <nav className="logged-out-nav-container">
            <Link to = "/">Log In</Link>
            <Link to = "register">Register</Link>
          </nav>

        )
      } else {
        nav = (

          <nav className = "logged-in-nav-container">
            <Link to = "votes" className="votes-nav">Votes</Link>
            <Link to = "search" className="search-nav">Search</Link>
            <input type="button" className="logout-button" onClick={this.handleLogOut} value="log out"/>
          </nav>

        )
      }
        return (
          <div>
              {nav}
          </div>
      );
    },
    handleLogOut(e) {
      e.preventDefault();
      store.session.logout();
    }
});

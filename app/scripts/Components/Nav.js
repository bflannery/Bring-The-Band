import React from 'react';
import { Link } from 'react-router';
import store from '../store';


export default React.createClass({
    render() {

      let nav;

      if(!window.localStorage.userName) {
        nav = (
          <ul className="logged-out-nav-container">
            <li className="nav-list"><Link to = "/" className="login">Log In</Link></li>
            <li className="nav-list"><Link to = "register" className="signup">Sign Up</Link></li>
          </ul>

        )
      } else {
        nav = (

          <ul className = "logged-in-nav-container">
            <li className="nav-list">
              <Link to = "votes" className="votes-nav">Votes</Link>
              </li>
            <li className="nav-list">
            <Link to = "search" className="search-nav">Search</Link>
            </li>
            <li className="nav-list">
            <input type="button" className="logout-button" onClick={this.handleLogOut} value="Log Out"/>
            </li>
          </ul>

        )
      }
        return (
          <nav className = "nav-container">
              {nav}
          </nav>
      );
    },
    handleLogOut(e) {
      e.preventDefault();
      store.session.logout();
    }
});

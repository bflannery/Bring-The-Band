import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import { hashHistory } from 'react-router';

export default React.createClass({
  render () {
    return (
      <div className="page-container">
      <Header />
      {this.props.children}

      </div>

    )
  }
})

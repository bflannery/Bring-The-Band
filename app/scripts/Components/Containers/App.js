import React from 'react';
import Header from '../Header'
import { hashHistory } from 'react-router';

export default React.createClass({
  render () {
    return (
      <div>
      <Header />
      {this.props.children}
      </div>

    )
  }
})

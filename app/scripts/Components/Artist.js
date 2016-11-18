import React from 'react';

import store from '../store';

export default React.createClass({
  render () {
    console.log(this.props)
    return (
      <li><span> {this.props.artist.name} </span></li>
    );
  }
});

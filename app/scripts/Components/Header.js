
import React from 'react';

import store from '../store';
import Nav from './Nav';

export default React.createClass({
  render: function() {
    return (
      <div className="header">
        <h2>Bring The Band</h2>
        <Nav />
      </div>
    );
  }
});

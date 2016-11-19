import React from 'react';

import store from '../store';

export default React.createClass({


  render () {
    console.log(this.props);
    return (
      <li className ="votes-artist-container">
        <span className="artist-name"> {this.props.votedArtist.name}</span>
      </li>
    );
}
});

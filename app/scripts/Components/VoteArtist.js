import React from 'react';

import store from '../store';

export default React.createClass({


  render () {

    return (
      <li className ="votes-artist-container">

        <span className="artist-name"> {this.props.votedArtist.name}</span>
        <img src= {this.props.votedArtist.image} width="200" height="200" className ="votes-artist-image"/>
      </li>

    );
}
});

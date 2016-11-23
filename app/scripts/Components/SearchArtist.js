import React from 'react';

import store from '../store';

import Votes from './Votes'


export default React.createClass({


  render () {

    return (

      <li className ="search-artist-container">
        <span className="artist-name"> {this.props.artist.name}</span>
        <img src= {this.props.artist.image} width="100" height="100" className="search-artist-image"/>
        <Votes artist={this.props.artist}/>
      </li>
    );
}
});

import React from 'react';

import store from '../store';


export default React.createClass({


  render () {

    return (
      <li className ="search-artist-container">
        <span className="artist-name"> {this.props.artist.name}</span>
        <img src= {this.props.artist.image} width="100" height="100"/>
        <input onClick={this.handleClick} type="button" value="vote"/>
      </li>
    );
  },
  handleClick(){
      store.artists.addVotes({name: this.props.artist.name, image: this.props.artist.image, id: this.props.artist.id, votes: 1});

    }
});

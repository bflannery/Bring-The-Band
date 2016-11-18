import React from 'react';

import store from '../store';

import Vote from './Vote';

export default React.createClass({


  render () {
  // console.log(this.props.artist.id)
    return (
      <li>
        <span> {this.props.artist.name}</span>
        <input onClick={this.handleClick} type="button" value="vote"/>
      </li>
    );
  },
  handleClick(){
      store.artists.addVotes({name: this.props.artist.name, photo: this.props.artist.images[0].url, votes: 1});

    }
});

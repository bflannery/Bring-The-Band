import React from 'react';

import store from '../store';

import Vote from './Vote';

export default React.createClass({
  render () {
  
    return (
      <li>
        <span> {this.props.artist.name}</span>
        <Vote votes={this.props.artists.votes} callback={this.addVote}/>
      </li>
    );
  },

  addVote() {

    store.artists.vote(this.props.artist.id);
  }
});

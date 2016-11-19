import React from 'react';

import store from '../store';

export default React.createClass ({
  render() {

    return (
      <input type="button" onClick={this.handleVote} value={this.props.votes || 0}/>

    );
  },
  handleVote(e) {
    console.log(this.props);
    e.preventDefault();
    store.voted.addVote({name: this.props.name, image: this.props.votes.images[0].url, votes: 1});

  }
});

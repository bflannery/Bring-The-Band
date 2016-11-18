import React from 'react';

import store from '../store';

export default React.createClass ({
  render() {
    console.log(this.props);
    return (
      <input type="button" onClick={this.handleVote} value={this.props.votes || 0}/>

    );
  },
  handleVote(e) {
    e.preventDefault();
    console.log('voted');
    this.props.callback();
  }
});

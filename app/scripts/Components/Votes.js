import React from 'react';

import store from '../store';

export default React.createClass({
  render() {
    console.log(this.props)

    return (
      <input onClick={this.handleClick} type="button" value="Vote"/>
    );
  },

    handleClick(){
        store.voted.addVotes({
          name: this.props.artist.name,
          image: this.props.artist.image,
          id: this.props.artist.id
        });

      }
});

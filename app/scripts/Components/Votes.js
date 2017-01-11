import React from 'react';
import { hashHistory} from 'react-router';
import store from '../store';

export default React.createClass({
  render() {
    console.log(this.props)

    return (
      <input onClick={this.handleClick} type="submit"  value="Vote"/>
    );
  },

    handleClick(){
        store.voted.addVotes({
          name: this.props.artist.name,
          image: this.props.artist.image,
          id: this.props.artist.id
        });
        hashHistory.push('/votes');


      }

});

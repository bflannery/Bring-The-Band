import React from 'react';

import store from '../../store';

import VotesList from '../VotesList';
import Header from '../Header';

export default React.createClass({

  getInitialState(){
    return {
      voted: store.voted.toJSON()
    }
  },
  componentWillMount(){
    store.voted.fetch();
  },

  componentDidMount () {
    store.voted.fetch();
    store.voted.on('update change', this.updateStatus);
  },
  componentWillUnmount() {
    store.voted.off('update change', this.updateStatus);
},
  render(){

    return (
      <div className = "votes-container">

        <h3> Artist Votes </h3>
        <VotesList votedArtists={this.state.voted}/>
      </div>
    );
  },

  updateStatus(){
    this.setState({voted: store.voted.toJSON()})
  }
});

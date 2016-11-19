import React from 'react';

import store from '../../store';

import VotesList from '../VotesList';

export default React.createClass({

  getInitialState(){
    return {
      session: store.session.toJSON(),
      voted: store.voted.toJSON(),
    }
  },
  componentWillMount(){
    store.voted.fetch();
  },

  componentDidMount () {
    store.session.on('change update' , ()=> {
      this.setState({voted: store.session.toJSON()})
    });
    store.voted.fetch();
    store.voted.on('change update', () =>{
      this.setState({voted: store.voted.toJSON()})
    });
},

  render(){

    return (
      <div className = "votes-container">
        <h3> Artist Votes </h3>
        <VotesList votedArtists={this.state.voted}/>
      </div>
    );
  },
});

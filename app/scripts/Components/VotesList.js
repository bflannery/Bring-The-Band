import React from 'react';
import ArtistVote from './VoteArtist';

export default React.createClass({

  render() {

    let votes;

    if(this.props.votedArtists.length < 1){
      votes = <li> No Votes Yet </li>;

    } else {
      votes = this.props.votedArtists.map((votedArtist, i ,arr) => {
        return <ArtistVote key={votedArtist.id} votedArtist={votedArtist}/>;
      });
    }

    return (
    
      <ul className = "votes-artists-list">
        {votes}
      </ul>

    );
  }
});

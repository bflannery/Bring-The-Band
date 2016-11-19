import React from 'react';
import Artist from './Artist';

export default React.createClass({

  render() {
      let artists;

  if(this.props.artists.length < 1){
    artists = <li className="empty-search-list"> No Search Results</li>;

  }  else {
    artists = this.props.artists.map((artist, i, arr) => {
    return <Artist key={artist.id} artist={artist}/>;

  });
}


  return (
    <div className = "search-artist-container">
      <h3> Search Results</h3>
      <ul className="search-artist-list">
        {artists}
      </ul>
      </div>
  );
}
});

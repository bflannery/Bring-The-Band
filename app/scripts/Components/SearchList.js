import React from 'react';
import SearchArtist from './SearchArtist';

export default React.createClass({

  render() {
  let artists;

  if(this.props.artists.length < 1){
    artists = <li className="empty-search-list"></li>;

  } else {

    artists = this.props.artists.map((artist, i, arr) => {
    return <SearchArtist key={artist.id} artist={artist}/>;

  });
}

  return (

    <div className="search-list-container">

        <ul className="search-artist-list">
            {artists}
        </ul>
      </div>

  );
}
});

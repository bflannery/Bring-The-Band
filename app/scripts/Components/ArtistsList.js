import React from 'react';
import Artist from './Artist';

export default React.createClass({

  render() {
  //     let artists;
  //   console.log("reference artists list" ,this.props.artists);
  //
  //
  // if(this.props.artists.length < 1){
  //   artists = <li> No Search Results</li>;
  //
  // }  else {
    let artists = this.props.artists.map((artist, i, arr) => {
    return <Artist key={i} artist={artist}/>;

  });
// }

  return (
    <div className = "bands-list">
      <h3> Search Results</h3>
      <ul>
        {artists}
      </ul>
      </div>
  );
}
});

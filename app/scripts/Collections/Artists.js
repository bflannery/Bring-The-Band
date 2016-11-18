import Backbone from 'backbone';
import $ from 'jquery';
import Artist from '../Models/artist';

export default Backbone.Collection.extend ({
  model: Artist,

getArtists(artist){
    // console.log("this reference", this)
$.ajax({

  type: 'GET',
  url:'https://api.spotify.com/v1/search',
  data: {
    q: artist,
    type: 'artist'
  },
  success: (response) => {
    let artist = new Artist(response);
    // console.log("this reference", this)
    this.add(artist);
  }
});
}
});

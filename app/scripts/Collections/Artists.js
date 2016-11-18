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
    console.log("this reference success", this)
    this.add(artist);
  }
});
},

vote(id) {
  console.log("this reference vote", this)
  let model = this.get(id);
  artist.save('votes' , artist.get('votes') + 1, {wait: true});
}
});

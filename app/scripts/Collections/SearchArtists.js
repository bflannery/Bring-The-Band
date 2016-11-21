import Backbone from 'backbone';
import $ from 'jquery';
import Artist from '../Models/artist';
import {hashHistory} from 'react-router';
import config from '../config';


export default Backbone.Collection.extend ({
model: Artist,

getArtists(artist){

$.ajax({

  type: 'GET',
  url:'https://api.spotify.com/v1/search',
  data: {
    q: artist,
    type: 'artist'
  },
  success: (data) => {
    this.reset();
    let artistInfo = data.artists.items.forEach((data,i,arr) => {
      if(data.images[0]) {
        this.add({
          id: data.id,
          name: data.name,
          image: data.images[0].url,
        });
      }
    });
  }
});
}

});

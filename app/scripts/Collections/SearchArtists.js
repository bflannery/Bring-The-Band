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
  success: (response) => {
    this.reset();
    let artist = new Artist(response);
    this.add(artist);
  }
});
},

addVotes({name, photo, votes}){
  $.ajax({

    type:'POST',
    url: 'https://api.backendless.com/v1/data/artists',
    contentType: 'application/json',
    data: JSON.stringify({name, photo, votes}),
    success: ()=>{
      // hashHistory.push('/search');
      console.log('voted!')
    }
  });
}
});

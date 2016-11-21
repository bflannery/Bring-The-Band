import Backbone from 'backbone';
import vote from '../Models/vote';



export default Backbone.Collection.extend ({
model: vote,
url: 'https://api.backendless.com/v1/data/artists',

parse(data) {
  console.log(data);
  return data.data
},

addVotes({name, image, votes, id}) {
  this.fetch({success: () => {
    let artist = this.findWhere({name: name});
    if(artist) {
      artist.save({votes: artist.get('votes') + 1},
    {
      success:()=> {
    }
});

} else {
  this.create({name, image, id, votes: 1},
  {
    success: () =>{


    }
  });
}
}
});
}
});

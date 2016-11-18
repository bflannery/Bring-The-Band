import React from 'react';
import store from '../store';
import ArtistsList from './ArtistsList';

export default React.createClass({

  getInitialState(){
    return {
      session: store.session.toJSON(),
      artists: [{artists:{items: []}}]
    }
  },
  componentWillMount(){
    store.session.on('change update', ()=> {
        console.log("this reference", this)
    });
    store.artists.on('change update', () => {
      this.setState({artists: store.artists.toJSON()})
        console.log("this reference", this.state.artists)
    });
  },

  render(){
    let artists = this.state.artists[0].artists.items;
      return(

        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <input id="search" type="text" placeholder="Search" className="search"/>
            <input type="submit" value="search"/>
          </form>
          <ArtistsList artists={artists}/>
        </div>

      );
    },
    handleSubmit(e){

      e.preventDefault();
      let artist = document.getElementById('search').value;
      store.artists.getArtists(artist);
    }
  });

import React from 'react';
import store from '../../store';
import ArtistsList from '../ArtistsList';

export default React.createClass({

  getInitialState(){
    return {
      session: store.session.toJSON(),
      artists: [{artists:{items: []}}]
    }
  },
  componentDidMount(){
    store.session.on('change update', ()=> {

    });
    store.artists.on('change update', () => {
      this.setState({artists: store.artists.toJSON()})

    });
  },

  render(){
    let artists = this.state.artists[0].artists.items;

      return(

        <div className="search-container">
          <form onSubmit={this.handleSubmit} className="search-form">
            <input id="search" type="text" placeholder="Search" className="search"/>
            <input type="submit" value="search" className = "search-submit-button"/>
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

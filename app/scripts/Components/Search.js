import React from 'react';
import store from '../store';

export default React.createClass({
  getInitialState(){
    return {
      session: store.session.toJSON(),
      artists : store.artists.toJSON()
    }
  },
  componentWillMount(){
    store.session.on('change', ()=> {
      this.setState({session: store.session.toJSON()})
    });
    store.artists.on('change', () => {
      this.setState({artists: store.artist.toJSON()})
    });
  },

  render(){
      return(
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <input id="search" type="text" placeholder="Search" className="search"/>
            <input type="submit" value="search"/>
          </form>
        </div>

      );
    },
    handleSubmit(e){
      e.preventDefault();
      let artist = document.getElementById('search').value;
      store.artists.getArtists(artist);
    }
  });

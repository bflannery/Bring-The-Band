import React from 'react';
import store from '../../store';
import SearchList from '../SearchList';
import Header from '../Header';

export default React.createClass({

  getInitialState(){
    return {
      session: store.session.toJSON(),
      artists: store.artists.toJSON()
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
      return(

        <div className="search-container">
      
        <h3> Search Artists </h3>
          <form onSubmit={this.handleSubmit} className="search-form">
            <input id="search" type="text" placeholder="Search Artist" className="search"/>
            <input type="submit" value="Search" className = "search-submit-button"/>
          </form>
          <SearchList artists={this.state.artists}/>
        </div>

      );
    },
    handleSubmit(e){
      e.preventDefault();
      let artist = document.getElementById('search').value;
      store.artists.getArtists(artist);
    }
  });

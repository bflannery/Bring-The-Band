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
        <div className="main-container">
          <div className="search-container">

          <h3> Search Artists </h3>
            <div className="search-form-container">
            <form onSubmit={this.handleSubmit} className="search-form">
              <input id="search" ref="search" type="text" placeholder="Search Artist" className="search"/>
              <input type="submit" value="Search" className = "search-submit-button"/>
              </form>
              </div>
          <SearchList artists={this.state.artists}/>
          </div>
        </div>

      );
    },
    handleSubmit(e){
      e.preventDefault();
      let artist = this.refs.search.value;
      store.artists.getArtists(artist);
    }
  });

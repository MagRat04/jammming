import React, { Component } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: {
        name: 'Enter Sandman',
        artist: 'Metallica',
        album: 'Metallica Self Titled',
        id: '1'
      },
      playlistName: 'Good Ole Metal',
      playlistTracks: []
      }

        this.addTrack = this.addTrack.bind(this);
    };

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({playlistTracks: track});
    }
  } 

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
              <SearchResults searchRes={this.state.SearchResults} onAdd={this.addTrack} />
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

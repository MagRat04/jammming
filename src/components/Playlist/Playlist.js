import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
    render() {
        return (
            <div className="Playlist" >
                <input defaultValue={"New Playlist"} />
                <TrackList tracks={this.state.playlistTracks} onAdd={this.state} isRemoval={false} />
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div >
        );
    }
}

export default Playlist;
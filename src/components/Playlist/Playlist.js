import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
        console.log(this.state.name)
    }

    render() {
        return (
            <div className="Playlist" >
                <input defaultValue={"New Playlist"} />
                <TrackList 
                    tracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                    onChange={this.handleNameChange}
                />
                <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
            </div >
        );
    }
}

export default Playlist;
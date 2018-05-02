import React, { Component } from 'react';
import Track from '../Track/Track';

class TrackList extends Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.track.map(track => {
                        return 
                        <Track
                            key={this.props.track.id}
                            track={this.props.track.name}
                            artist={this.props.track.artist}
                            album={this.props.track.album}
                        />
                    })}
                }}
            </div>
        );
    }
}

export default Track;
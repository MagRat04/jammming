import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.SearchResults} onAdd={this.props.onAdd}/>
            </div>
        );
    }
}

export default SearchResults;
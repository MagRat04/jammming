import React, { Component } from 'react';

class Track extends Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.Track);
    }

    /* if isRemoval is TRUE then display a "-" and remove the track */
    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack}>-</a>
        } else {
            return <a className="Track-action" onClick={this.addTrack}>+</a>;
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>// track name will go here</h3>
                    <p>// track artist will go here | track album will go here</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}

export default Track;
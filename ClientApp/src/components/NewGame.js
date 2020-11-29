import React, { Component } from 'react';
import RandomTile from './RandomTile';
import Map from './Map';


export class NewGame extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className={'mt-container'}
            >
                <RandomTile />
                <Map />
            </div>
        );
    }
}

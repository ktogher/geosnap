import React, { Component } from 'react';
import RandomTile from './RandomTile';


export class NewGame extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RandomTile />
            </div>
        );
    }
}

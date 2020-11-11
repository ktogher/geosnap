import React, { Component } from 'react';
import Tiles from './Tiles';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <Tiles/>
        </div>
    );
  }
}

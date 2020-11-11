import React, { Component } from 'react';
import MainTile from './MainTile';
import SubTile from './SubTile';
//import SubTile from './SubTile';

class Tiles extends Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                }}
            >
                <MainTile />
                <div
                    className={'tiles'}
                    style={{
                        width: '100%',
                    }}
                >
                    <div
                        id={'World'}
                        style={{
                            backgroundColor: 'blue',
                        }}
                        className={'sub-tile'}
                    >
                        
                    </div>
                    <div
                        id={'People'}
                        style={{
                            backgroundColor: 'purple',
                        }}
                        className={'sub-tile'}
                    >
                        
                    </div>
                    <div
                        id={'Objects'}
                        style={{
                            backgroundColor: 'green',
                        }}
                        className={'sub-tile'}
                    >
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Tiles
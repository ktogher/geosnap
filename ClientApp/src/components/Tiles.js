import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <Link
                    to="/NewGame"
                    id={'Main'}
                    className={'main-tile'}
                    style={{
                        backgroundColor: 'red',
                    }}
                    onClick={this.StartNew}
                >
                </Link>

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
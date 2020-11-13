import React, { Component } from 'react';
import { RANDOM_API_URL } from '../constants';

class MainTile extends Component {
    
    state = {
        items: []
    }

    componentDidMount() {
        this.GetItems();
    }

    GetItems = () => {
        fetch(RANDOM_API_URL)
            .then(res => res.json())
            //.then(data => console.log(data))
            .then(res => this.setState({ items: res }))
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div
                style={{
                    backgroundColor: 'red',
                }}
                className={'main-tile'}
            >
            </div>
        );
    }
}

export default MainTile
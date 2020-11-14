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
        let check = [null, null];
        //while (check[0] == null && check[1] == null) {
            fetch(RANDOM_API_URL)
                .then(res => res.json())
                .then(data => console.log(data.result.location))
                .then(data => check[0] = data.result.location.position.latitude)
                .then(data => check[1] = data.result.location.position.longitude)
                .then(console.log(check))
                .then(res => this.setState({ items: res }))
                .catch(err => console.log(err));
        //}
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
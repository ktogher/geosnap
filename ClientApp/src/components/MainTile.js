import React, { Component } from 'react';
import { RANDOM_API_URL, API_URL } from '../constants';

class MainTile extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: 'false',
            image: 'https://via.placeholder.com/350'
        };
    }

    componentDidMount() {
        this.GetData();
    }

    GetData = () => {
        let check = [];
            fetch(API_URL)//fetch(RANDOM_API_URL)
                .then(res => res.json())
                .then(json => {
                    check.push(json.result.location.position.latitude, json.result.location.position.longitude)
                    console.log(check);
                    if (check[0] == null && check[1] == null) {
                        this.GetData();
                    }
                    else {
                        console.log(json.result.location);
                        this.setState({ data: json.result })
                        this.setState({ image: json.result.urls.small })
                    }  
                })
    }
    
    render() {
        return (
            <div
                style={{
                    backgroundImage: 'url('+ this.state.image +')',
                }}
                className={'main-tile'}
            >
            </div>
        );
    }
}

export default MainTile
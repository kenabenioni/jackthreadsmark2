import React, { Component } from 'react'
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Home">
            <img src="https://cdn.shopify.com/s/files/1/2160/1407/files/JT-35-0FF-HOMEPAGE_1728x.jpg?v=1545841411" className="home-img"/>
            <img src="https://cdn.shopify.com/s/files/1/2160/1407/files/JT-SNEAKERS-12-14-HOMEPAGE_1728x.jpg?v=1544806524" className="home-img"/>
            <img src="https://cdn.shopify.com/s/files/1/2160/1407/files/HOLIDAY-SUITS-JT-HOMEPAGE_1728x.jpg?v=1544720043" className="home-img"/>
            <img src="https://cdn.shopify.com/s/files/1/2160/1407/files/JT-BOOTS-79-HOMEPAGE_1728x.jpg?v=1544547494" className="home-img"/>
            </div>
        );
    }
}
 
export default Home;
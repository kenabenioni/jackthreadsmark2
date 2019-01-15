import React, { Component } from 'react'
import axios from 'axios';
import './Item.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            displayImg: "",
            name: "",
            price: "",
            brand: "",
            product_id: 1,
            img_id: 1,
            color_id: 1,
            imgs: [],
            size: "S",
            quantity: 1
        }
    }
    componentDidMount() {
        axios
          .get(
            `/api/clothing?id=${this.props.match.params.id}&img=${
              this.props.match.params.img
            }`
          )
          .then(response => {
            console.log(response.data);
            this.setState({
              product: response.data,
              displayImg: response.data[0].img_url,
              name: response.data[0].name,
              price: response.data[0].price,
              brand: response.data[0].brand,
              product_id: response.data[0].product_id,
              img_id: response.data[0].img_id,
              color_id: response.data[0].color_id
              
            });
          });
      }
    render() { 
        console.log(this.state);
        return (
            <div className="Item">
            <img src={this.state.displayImg} className="side-item-img"/>
            <img src={this.state.displayImg} className="item-img"/>
            <div className="item-section">
                <h2 className="item-brand">{this.state.brand}</h2>
                <h1 className="item-name">{this.state.name}</h1>
                <h3 className="item-price">${this.state.price}</h3>
                <p className="interest">Interest-free installments by Afterpay available between</p>
                <p className="usd">$35.00 - $1000.00 USD</p>
            </div>
            </div>
        );
    }
}
 
export default Item;
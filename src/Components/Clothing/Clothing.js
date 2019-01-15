import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./Clothing.css";

class Clothing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clothing: []
        }
    }

    componentDidMount() {
        axios.get("/api/getcl").then(response => {
          this.setState({ clothing: response.data });
        });
      }
    
    render() { 
        console.log(this.state.clothing);
        let all = this.state.clothing.map((e, i) => {
            return (
                <Link to={`/clothing/${e.product_id}/${e.img_id}`} style={{textDecoration: 'none'}}>
                <div key={i} className="clothing-individual">
                <div className="clothing-wrapper">
                <img src={e.img_url} className="clothing-img"/>
                </div>
                <h4 className="clothing-brand">{e.brand}</h4>
                <h4 className="clothing-name">{e.name}</h4>
                <h4 className="clothing-price">${e.price}</h4>
                </div>
                </Link>
            )
        })
        return (
            <div className="Clothing">
            <div className="clothing-section">
            {all}
            </div>
            </div>
        );
    }
}
 
export default Clothing;
import React, { Component } from 'react'
import axios from 'axios';
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
        console.log(this.state)
        let all = this.state.clothing.map((e, i) => {
            return (
                <div key={i} className="clothing-individual">
                <div className="clothing-wrapper">
                <img src={e.img_url} className="clothing-img"/>
                </div>
                <h4 className="clothing-brand">{e.brand}</h4>
                <h4 className="clothing-name">{e.name}</h4>
                <h4 className="clothing-price">${e.price}</h4>
                </div>
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
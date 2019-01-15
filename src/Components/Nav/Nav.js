import React, { Component } from "react";
import "./Nav.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  // async componentDidMount(){
  //   let res = await axios.get('/api/user-data')
  //   this.setState({user: res.data})
  // }

  login(){
    let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
  }

  render() {
    const { setToggle } = this.props;
    return (
      <div className="nav">
      <h3 className="top-nav"><strong>FREE SHIPPING </strong>ON ORDERS OVER $80</h3>
        <div className="nav-small">
          <button id="allbuttons">Menu</button>
          <div className="logotextdiv_small">
          {/* <Link to={"/"}> */}
            <img
              src="https://cdn.shopify.com/s/files/1/2160/1407/files/JT_Full_Logo_RGB_75x@2x.png?v=1500308626"
              className="logotext-small"
              alt=""
            />
            {/* </Link> */}
          </div>
          <div className="searchbag">
            <button id="allbuttons">Search</button>
            <button id="allbuttons">Bag</button>
          </div>
        </div>
        <div className="nav-full">
          <div className="navleft">
            <Link to={"/"}>
              <img
                className="logotext"
                src="https://cdn.shopify.com/s/files/1/2160/1407/files/JT_Full_Logo_RGB_75x@2x.png"
                alt=""
              />
            </Link>
            <div className="leftbuttons">
              <button className="left-buttons" id="allbuttons">
                New
              </button>
              <Link to={"/clothing"}>
                <button className="left-button" id="allbuttons">
                  Clothing
                </button>
              </Link>
              <button className="left-buttons" id="allbuttons">
                Shoes
              </button>
              <button className="left-buttons" id="allbuttons">
                Accessories
              </button>
              <button className="left-buttons" id="allbuttons">
                Sale
              </button>
            </div>
          </div>
          <div className="navright">
            <input type="text" placeholder="Search" className="navinput" />
              <div>
                {/* <button onClick={this.login} id="allbuttons" className="loginbutton">Login</button> */}
                <FontAwesomeIcon icon={faUser} size="lg" className="user-button"/>
              </div>
            
                <FontAwesomeIcon icon={faShoppingBag} size="lg" className="user-button" onClick={setToggle}/>
              {/* <button id="allbuttons" className="bag">Bag</button> */}
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Nav;
import React, { Component } from "react";
import "./Bag.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { sidebarToggle } = this.props;
    const { setToggle } = this.props;
    return (
      <div className={sidebarToggle ? "noBar" : "Bar"}>
        <div className="top-bag"> 
          <FontAwesomeIcon icon={faTimes} size="3x" onClick={setToggle} className="x"/>
          <h3 className="yourbag">YOUR BAG</h3>
        </div>
        <p className="empty">Your bag is empty.</p>
        <p className="empty">Go get some stuff.</p>
        <hr/>
        <div className="policy">
          <p className="policytext">Shipping Policy</p>
          <p className="policyline">Return Policy</p>
        </div>
      </div>
    );
  }
}

export default Bag;

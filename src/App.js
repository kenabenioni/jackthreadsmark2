import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Nav from './Components/Nav/Nav';
import Bag from './Components/Bag/Bag';
import routes from './routes';
import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggle: true
    };
    this.setToggle = this.setToggle.bind(this);
  }

  setToggle(){
    this.setState({sidebarToggle: !this.state.sidebarToggle})
  }

  render() {
    return (
      <div className="App">
            <div className={!this.state.sidebarToggle ? 'overlay visible' : 'overlay hidden'} >
      </div>
      <Nav setToggle={this.setToggle}/>
      {routes}
      <Bag sidebarToggle={this.state.sidebarToggle}
      setToggle={this.setToggle}/>
      <Footer/>
      </div>
    );
  }
}

export default App;

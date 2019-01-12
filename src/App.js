import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import Footer from './Components/Footer/Footer';

class App extends Component {
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
    return (
      <div className="App">
      <Nav/>
      {routes}
      <Footer/>
      </div>
    );
  }
}

export default App;

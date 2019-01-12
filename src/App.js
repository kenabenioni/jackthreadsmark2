import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import Footer from './Components/Footer/Footer';

class App extends Component {
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

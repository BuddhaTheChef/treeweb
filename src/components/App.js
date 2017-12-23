import React, { Component } from 'react';
import './App.css';
import router from '../router.js';
import Navbar from './navbar/Navbar';
import { withRouter } from 'react-router-dom';


class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Navbar />
        { router }
      </div>
    );
  }
}

export default withRouter(App);

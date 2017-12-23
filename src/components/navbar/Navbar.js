import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/secondview">Second View</a></li>
              <li><a href="/thirdview">Third View</a></li>
              <li><a href="/fourthview">Fourth View</a></li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Navbar;

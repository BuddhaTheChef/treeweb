import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <div className="container">
            <ul className="navbar-nav">
              <li><a className="list-a-tag" href="/">Home</a></li>
              <li><a className="list-a-tag" href="/secondview">Map View</a></li>
              <li><a className="list-a-tag" href="/thirdview">Create Project</a></li>
              <li><a className="list-a-tag" href="/fourthview">Fourth View</a></li>
            </ul>
        </div>
    );
  }
}

export default Navbar;

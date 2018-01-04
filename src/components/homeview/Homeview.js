import React, { Component } from 'react';
import './Homeview.css';
import pic from './pic.jpg';
import pic1 from './pic.jpg';
import pic2 from './pic.jpg';
import pic3 from './pic.jpg';

class Homeview extends Component {
  render() {
    return (
      <div className="homecontainer">
        <img className="tree-pic" src={pic} alt={"logo"}/>
        <div className="top-content">
          <h1>Home View</h1>
          <p>I will add some contnent here tomorrow!</p>
        </div>
        <div className="image-contain">
        <img className="tree-pic1" src={pic1} alt={"logo"}/>
        <img className="tree-pic2" src={pic2} alt={"logo"}/>
        <img className="tree-pic3" src={pic3} alt={"logo"}/>
        </div>
      </div>
    );
  }
}

export default Homeview;

import React, { Component } from 'react';
import './Fourthview.css';

class Fourthview extends Component {
  render() {
    return (
      <div className="fourth-main-container">
      <div className="fourth-left-container">
       <p>hello</p>
       <p>hello</p>
       <p>hello</p>
       <p>hello</p>
       <p>hello</p>
       <p>hello</p>
       <p>hello</p>
       <p>hello</p>
      </div>
      <div className="fourthcontainer">
        <div className="fourthview-content-top">
        <h1 className="fourthtitle">Search Jobs</h1>
        <div className="fourth-input-container">
          <input className="fourthview-input1" placeholder="Search by Location"/>
          <input className="fourthview-input2" placeholder="Search by Code #"/>
        </div>
      </div>

      <div className="fourthview-content-bot">
        <h2>Still dont know what to do for the content yet</h2>
      </div>
    </div>
    <div className="fourth-right-container">
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </div>
    </div>
    );
  }
}

export default Fourthview;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homeview.css';
import pic from './pic.jpg';
import pic1 from './tree-map.jpg';
import pic2 from './syllabus.png';
import pic3 from './pic.jpg';
import banner from './banner.png';
import example1 from './screenshot1.png';
import example2 from './screenshot2.png';

class Homeview extends Component {
  render() {let {mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
    };
    let size = modes[mode] || 'cover';

    let defaults = {
      height: height || '70vh',
      width: width || '100%',
      backgroundColor: 'gray'
    };

    let important = {
      backgroundImage: `url("${pic}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
};
    return (
      <div className="homecontainer">
        <div {...props} style={{...defaults, ...style, ...important}}>
          <div className="header-content">
            <img className="banner" src={banner} />
            <div className="title-content">
            <h1>Tree Web App</h1>
            <h4>Helping you find the right trees the fastest</h4>
            </div>
          </div>
        </div>
        <div className="top-content">
          <h1>Home View</h1>
          <p className="text-mid-content">I will add some contnent here tomorrow! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
        </div>
        <div className="image-contain">
          <div className="pic-content">
            <Link to="/secondview"  style={{ textDecoration: 'none' }}>
            <img className="tree-pic1" src={pic1} alt={"logo"}/>
            <h3 className="sub-pic-contnent-header">Find Trees on the Map!</h3>
            <p className="sub-pic-contnent">I will add some contnent here tomorrow! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            </Link>
          </div>
          <div className="pic-content">
            <Link to="/thirdview"  style={{ textDecoration: 'none' }}>
        <img className="tree-pic2" src={pic2} alt={"logo"}/>
        <h3 className="sub-pic-contnent-header">Create a Project!</h3>
        <p className="sub-pic-contnent">I will add some contnent here tomorrow! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
        </Link>
        </div>
        <div className="pic-content">
          <Link to="/fourthview"  style={{ textDecoration: 'none' }}>
        <img className="tree-pic3" src={pic3} alt={"logo"}/>
        <h3 className="sub-pic-contnent-header">View 4</h3>
        <p className="sub-pic-contnent">I will add some contnent here tomorrow! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
      </Link>
        </div>
        </div>
        <div className="homeview-bottom-content-header">
          <h1>How it Works</h1>
        </div>
        <div className="example1-container">
            <img className="example-pic1" src={example1} alt={"logo"}/>
            <div className="example1-second-container">
            <h2>Step 1:</h2>
            <p className="example-pic1-content">I will add some contnent here tomorrow! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <div className="example2-container">
          <div className="example2-second-container">
          <h2>Step 2:</h2>
            <p className="example-pic2-content">I will add some contnent here tomorrow! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <img className="example-pic2" src={example2} alt={"logo"}/>
        </div>
        <div className="example3-container">
            <img className="example-pic3" src={example1} alt={"logo"}/>
            <div className="example3-second-container">
            <h2>Step 3:</h2>
            <p className="example-pic3-content">I will add some contnent here tomorrow! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             </div>
        </div>
      </div>
    );
  }
}

export default Homeview;

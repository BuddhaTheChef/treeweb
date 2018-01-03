import React, { Component } from 'react';
import './Thirdview.css';
import axios from 'axios';
import logo from './chelsea-bock-3073.jpg';

class Thirdview extends Component {
  constructor(props) {
      super(props);
      this.state = {
        projname: '',
        compfrom: '',
        numtree: '',
        location: '',
        price: '',
        email: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      const projObj = {projname: this.state.projname, compfrom: this.state.compfrom, numtree: this.state.numtree, location: this.state.location, price: this.state.price, email: this.state.email }
      console.log(projObj)
      axios.post('/api/submitForm',projObj)
      .then((response) => {
        console.log(response);
        // this.props.history.push(`/post/${post}`);
      })
      .catch(error => {
    console.log(error.response)
});
    }

    render() {
      return (
      <div className="form-container">
        <div className="container-form" >
        <h1 className="form-title">PROJECT FORM</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Project Name:
            <br/>
            <input className="form-inputs" type="text"  onChange={(event) => {this.state.projname = event.target.value}} />
          </label>
          <label>
            Company From:
            <br/>
            <input className="form-inputs" type="text" onChange={(event) => {this.state.compfrom = event.target.value}} />
          </label>
          <label>
            Number of trees:
            <br/>
            <input className="form-inputs" type="text" onChange={(event) => {this.state.numtree = event.target.value}} />
          </label>
          <label>
            Location:
            <br/>
            <input className="form-inputs" type="text" onChange={(event) => {this.state.location = event.target.value}} />
          </label>
          <label>
            Price:
            <br/>
            <input className="form-inputs" type="text" onChange={(event) => {this.state.price = event.target.value}} />
          </label>
          <label>
            Email:
            <br/>
            <input className="form-inputs" type="text" onChange={(event) => {this.state.email = event.target.value}} />
          </label>
          <button className="form-button" type="submit" onClick={(event) => {this.handleSubmit(event)}}>Submit</button>
        </form>
        </div>
        <div className= "right-container">
          <img className="logo-tree" src={logo} alt={"logo"}/>
          <div className="inner-div-contian">
            <div className="inner-div-header">
              <h4>Forms</h4>
            </div>
            <div className="inner-div-content">
              <p>Created Projects Will Show Up Here!</p>
            </div>

          </div>
        </div>
      </div>

      );
    }
}

export default Thirdview;

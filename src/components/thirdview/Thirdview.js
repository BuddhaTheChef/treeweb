import React, { Component } from 'react';
import './Thirdview.css';
import axios from 'axios';

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
      <div>
        <h1>FORM PAGE HERE</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Project Name:
            <input type="text"  onChange={(event) => {this.state.projname = event.target.value}} />
          </label>
          <label>
            Company From:
            <input type="text" onChange={(event) => {this.state.compfrom = event.target.value}} />
          </label>
          <label>
            Number of trees:
            <input type="text" onChange={(event) => {this.state.numtree = event.target.value}} />
          </label>
          <label>
            Location:
            <input type="text" onChange={(event) => {this.state.location = event.target.value}} />
          </label>
          <label>
            Price:
            <input type="text" onChange={(event) => {this.state.price = event.target.value}} />
          </label>
          <label>
            Email:
            <input type="text" onChange={(event) => {this.state.email = event.target.value}} />
          </label>
          <button type="submit" onClick={(event) => {this.handleSubmit(event)}}>Submit</button>
        </form>
      </div>
      );
    }
}

export default Thirdview;

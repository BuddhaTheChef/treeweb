import React, {Component} from 'react';
import './Fourthview.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Fourthview extends Component {
  state = {
    selectedOption: ''
  }

  handleChange = (selectedOption) => {
    this.setState({selectedOption});
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    const {selectedOption} = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div className="fourth-main-container">
        <div className="fourth-left-container">
          <Select placeholder="Project Code" name="form-field-name" className="dropdown-content" value={value} onChange={this.handleChange} options={[
            {
              value: '#1234',
              label: 'Project Code One'
            }, {
              value: '#12345',
              label: 'Project Code Two'
            }
          ]}/>
          <Select placeholder="Search by Price" name="form-field-name" className="dropdown-content" value={value} onChange={this.handleChange} options={[
            {
              value: '$1000',
              label: 'Project One (1000)'
            }, {
              value: '$2000',
              label: 'Project Two (2000)'
            }
          ]}/>
          <Select placeholder="Number of Trees" name="form-field-name" className="dropdown-content" value={value} onChange={this.handleChange} options={[
            {
              value: '50',
              label: 'Small Job 50 Trees'
            }, {
              value: '100',
              label: 'Big Job 100 Trees'
            }
          ]}/>
          <Select placeholder="Search Company" name="form-field-name" className="dropdown-content" value={value} onChange={this.handleChange} options={[
            {
              value: 'Hunt',
              label: 'Hunt'
            }, {
              value: 'NOAA',
              label: 'NOAA'
            }
          ]}/>
          <Select placeholder="Open Bidding" name="form-field-name" className="dropdown-content" value={value} onChange={this.handleChange} options={[
            {
              value: '1000-2000',
              label: 'Proj One 1000'
            }, {
              value: '2001-3000',
              label: 'Proj Two 2001'
            }
          ]}/>
          <Select placeholder="Search by Location" name="form-field-name" className="dropdown-content" value={value} onChange={this.handleChange} options={[
            {
              value: 'Kapolei',
              label: 'Kapolei'
            }, {
              value: 'Barbers Point',
              label: 'Barbers Point'
            }
          ]}/>
          <div className="fourth-left-inner-container">
            <p>dropdown content</p>
          </div>
          <div className="fourth-left-inner-container">
            <p>dropdown content</p>
          </div>
        </div>
        <div className="fourthcontainer">
          <div className="fourthview-content-top">
            <h1 className="fourthtitle">Search Jobs</h1>
            <div className="fourth-input-container">
              <input className="fourthview-input1" placeholder="Search by Location"/>
              <input className="fourthview-input2" placeholder="Search by Code #"/>
            </div>
            <div className="fourthview-content-bottom">
              <h1>Projects will be displayed here!</h1>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Fourthview;

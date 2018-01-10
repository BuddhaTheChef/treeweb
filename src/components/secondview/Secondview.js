import React, { Component } from 'react';
import './Secondview.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Autocomplete from 'react-google-autocomplete';



class Secondview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  render() {
      return (
        <Map google={this.props.google}
          onClick={this.onMapClicked}
          className="mapview"
          initialCenter={{
            lat: 21.315603,
            lng: -157.858093
          }}
          zoom={12}>
    <div className="secondcontainer">
      <h2 className="input-title">Search By Location</h2>
      <Autocomplete
        className="search"
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        types={['(regions)']}z
      />
    </div>



          <Marker onClick={this.onMarkerClick}
                  name={'Honolulu, Hawaii'} />
                  <InfoWindow
                 marker={this.state.activeMarker}
                 visible={this.state.showingInfoWindow}>
                   <div>
                     <h4>{this.state.selectedPlace.name}</h4>
                   </div>
               </InfoWindow>
        </Map>
      );
    }
  }


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDha-lg4swxWu7TOZfRgiLivhNcjWb4ZT4")
})(Secondview)

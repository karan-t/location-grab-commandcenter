import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import firebase from "./Firebase";
console.log(process.env);
const api_key = process.env.REACT_APP_API_KEY
class App extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markers: [],
  };

  componentDidMount() {
    this.addMarkerListener();
  }

  addMarkerListener() {
    firebase
      .database()
      .ref("positions")
      .on("value", (snapshot) => {
        var markers_ = [];
        snapshot.forEach((childSnapshot) => {
          markers_.push({
            id: childSnapshot.key,
            params: childSnapshot.val(),
          });
        });
        this.makeMarkerList(markers_);
      });
  }

  makeMarkerList(markersArray) {
    var markersList = [];
    markersArray.forEach((x) => {
      markersList.push(
        <Marker
          onClick={this.onMarkerClick}
          name={x.id}
          position={{ lat: x.params.latitude, lng: x.params.longitude }}
        />
      );
    });
    this.setState({
      markers: markersList,
    });
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        initialCenter={{ lat: 20.5937, lng: 78.9629 }}
        zoom={6}
      >
        {this.state.markers}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (api_key),
})(App);

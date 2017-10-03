import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });//third party library integration, refs.map
  }

  render() {
    // this.refs.map to refer
    return <div ref="map" />;
  }
}

export default GoogleMap;

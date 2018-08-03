import React, { Component } from 'react'

const mapStyle = {
  width: 'inherit',
  height: 180,
}

export default class Map extends Component { 
  componentDidMount() {
    const myLatLng = {
      lat: this.props.location.lat,
      lng: this.props.location.lng
    }

    this.map = new google.maps.Map(this.refs.map, {
      center: myLatLng,
      zoom: 16
    })

    let marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Hello World!'
    })
  }

  render() {
    return(
      <div ref='map' style={mapStyle}></div>
    )
  }
}
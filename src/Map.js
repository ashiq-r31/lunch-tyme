import React, { Component } from 'react'

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
      <div ref='map' style={{ width: '100%', height: 180, backgroundColor: '#e6e6e6' }}></div>
    )
  }
}
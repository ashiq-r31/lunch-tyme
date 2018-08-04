import React, { Component } from 'react'
import PropTypes from 'prop-types'
import scriptLoader from 'react-async-script-loader'

export class Map extends Component {
  componentWillReceiveProps({ isScriptLoadSucceed, location }) {
    if(isScriptLoadSucceed && !!location) {
      this.map = new google.maps.Map(this.refs.map, {
        center: {
          lat: location.lat,
          lng: location.lng
        },
        zoom: 16
      })
  
      let marker = new google.maps.Marker({
        position: {
          lat: location.lat,
          lng: location.lng
        },
        map: this.map
      })
    }
  }

  render() {
    return (
      <div ref='map' style={{ width: '100%', height: 180, backgroundColor: '#e6e6e6' }}></div>
    )
  }
}

Map.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  })
}

export default scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyDkhNcFY2PRqMkp0JGgvWwdeDdM0cGaa7I'])(Map)
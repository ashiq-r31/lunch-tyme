import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Map extends Component { 
  componentDidMount() {
      this.map = new google.maps.Map(this.refs.map, {
        center: { 
          lat: this.props.location.lat, 
          lng: this.props.location.lng 
        },
        zoom: 16
      })
  
      let marker = new google.maps.Marker({
        position: { 
          lat: this.props.location.lat, 
          lng: this.props.location.lng 
        },
        map: this.map
      })
      console.log(this.map)
  }

  render() {
    return(
      <div ref='map' style={{ width: '100%', height: 180, backgroundColor: '#e6e6e6' }}></div>
    )
  }
}

Map.defaultProps = {
  location: {
    lat: 48.858370,
    lng: 2.294481
  }
}

Map.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  })
}
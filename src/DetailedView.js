import React, { Component } from 'react'
import Map from './Map'
import PropTypes from 'prop-types'

class DetailedView extends Component {
  renderLocation = () => {
    const { location } = this.props.restaurant

    const street = !!location && !!location.formattedAddress[0]
      ? <p>{location.formattedAddress[0]}</p>
      : <p className='error'>Street address not available</p>

    const city = !!location && !!location.formattedAddress[1]
      ? <p>{location.formattedAddress[1]}</p>
      : <p className='error'>City and state address not available</p>
    
    return (
      <div>
        {street}
        {city}
      </div>
    )
  }

  renderContact = () => {
    const { contact } = this.props.restaurant

    const phone = !!contact && !!contact.formattedPhone 
      ? <p className='contact'>{contact.formattedPhone}</p> 
      : <p className='contact error'>Phone not available</p>

    const twitter = !!contact && !!contact.twitter
      ? <p className='contact'>{`@${contact.twitter}`}</p>
      : <p className='contact error'>Twitter handle not available</p>

    return (
      <div>
        {phone}
        {twitter}
      </div>
    )
  }

  render({ restaurant, isOpen } = this.props) {
    return (
      <div className={(isOpen) ? 'detail-view detail-view-open' : 'detail-view'}>
        <Map location={restaurant.location} name={restaurant.name} />

        <div className='restaurant-details detail-banner'>
          <h1 className='restaurant-name'>{restaurant.name}</h1>
          <h2 className='restaurant-category'>{restaurant.category}</h2>
        </div>

        <div className='detail-group'>
          {this.renderLocation()}
          {this.renderContact()}
        </div>
      </div>
    )
  }
}

DetailedView.propTypes = {
  restaurant: PropTypes.shape({
    location: PropTypes.object,
    contact: PropTypes.object,
    name: PropTypes.string,
    category: PropTypes.string
  }),
  isOpen: PropTypes.bool
}

export default DetailedView
import React, { Component } from 'react'
import Map from './Map'

const DetailedView = ({ restaurant }) => (
  <div className='detail-view'>
    <Map location={restaurant.location} />

    <div className='restaurant-details detail-banner'>
      <h1 className='restaurant-name'>{restaurant.name}</h1>
      <h2 className='restaurant-category'>{restaurant.category}</h2>
    </div>

    <div className='detail-group'>
      <p>{restaurant.location.formattedAddress[0]}</p>
      <p style={{ marginBottom: 26 }}> {restaurant.location.formattedAddress[1]}</p>
    
      <p style={{ marginBottom: 26 }}>{(restaurant.contact) ? restaurant.contact.formattedPhone : 'Phone not available'}</p>
      <p>{(restaurant.contact.length) ? `@${restaurant.contact.twitter}` : 'Twitter handle not available'}</p>
    </div>
  </div>
)

export default DetailedView
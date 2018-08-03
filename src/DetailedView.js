import React, { Component } from 'react'
import Map from './Map'

const DetailedView = ({ restaurant }) => (
  <div class='detail-view'>
    <Map location={restaurant.location} />

    <div class='restaurant-details detail-banner'>
      <h1 class='restaurant-name'>{restaurant.name}</h1>
      <h2 class='restaurant-category'>{restaurant.category}</h2>
    </div>

    <div class='detail-group'>
      <p>{restaurant.location.formattedAddress[0]}</p>
      <p style={{ marginBottom: 26 }}> {restaurant.location.formattedAddress[1]}</p>
    
      <p style={{ marginBottom: 26 }}>{restaurant.contact.formattedPhone}</p>
      <p>{`@${restaurant.contact.twitter}`}</p>
    </div>
  </div>
)

export default DetailedView
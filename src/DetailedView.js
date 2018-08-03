import React, { Component } from 'react'
import Map from './Map'

const DetailedView = ({ restaurant }) => (
  <div class='detail-view'>
    <Map location={restaurant.location} />
    <h1>{restaurant.name}</h1>
    <h2>{restaurant.category}</h2>
    <p>{restaurant.location.formattedAddress[0]}</p>
    <p>{restaurant.location.formattedAddress[1]}</p>
    <p>{restaurant.contact.formattedPhone}</p>
    <p>{`@${restaurant.contact.twitter}`}</p>
  </div>
)

export default DetailedView
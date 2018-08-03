import React, { Component } from 'react'

const RestaurantPreview = ({ restaurant, onSelect }) => (
  <div 
    className='restaurant-preview' 
    onClick={() => onSelect({ ...restaurant })}
    style={{ 
      backgroundImage: `url('/images/cellGradientBackground@2x.png'), url(${restaurant.backgroundImageURL})`, 
      backgroundSize: 'cover' }}>
    <div className='restaurant-details'>
      <h1 className='restaurant-name'>{restaurant.name}</h1>
      <h2 className='restaurant-category'>{restaurant.category}</h2>
    </div>
  </div>
)

export default RestaurantPreview
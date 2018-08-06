import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ListView = ({ restaurant, onSelect }) => (
  <div 
    className='restaurant-preview' 
    onClick={() => onSelect({ ...restaurant })}
    style={{ 
      backgroundImage: `url('images/cellGradientBackground@2x.png'), url(${restaurant.backgroundImageURL})`, 
      backgroundSize: 'cover' }}>
    <div className='restaurant-details'>
      <h1 className='restaurant-name'>{restaurant.name}</h1>
      <h2 className='restaurant-category'>{restaurant.category}</h2>
    </div>
  </div>
)

ListView.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    backgroundImageURL: PropTypes.string
  }),
  onSelect: PropTypes.func
}

export default ListView
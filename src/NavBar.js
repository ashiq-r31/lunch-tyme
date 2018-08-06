import React, { Component } from 'react'
import PropTypes from 'prop-types'

const NavBar = ({ onBack, hasBack }) => (
  <div className='nav-bar flex-container'>
    <div className='flex-column' style={{ maxWidth: '33.33%' }}>
      {hasBack && <img className='icon' onClick={() => onBack()} style={{ marginRight: 'auto', marginLeft: 12, cursor: 'pointer', paddingRight: 12 }} src='images/ic_webBack@2x.png' />}
    </div>

    <div className='flex-column' style={{ maxWidth: '33.33%' }}>
      <h2 className='app-name'>Lunch Tyme</h2>
    </div>

    <div className='flex-column' style={{ maxWidth: '33.33%' }}>
      <img className='icon' style={{ marginLeft: 'auto', marginRight: 12 }} src='images/icon_map@2x.png' />
    </div>
  </div>
)

NavBar.propTypes = {
  onBack: PropTypes.func,
  hasBack: PropTypes.bool
}

export default NavBar
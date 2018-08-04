import React, { Component } from 'react'

const NavBar = ({ onBack, hasBack }) => (
  <div className='nav-bar flex-container'>
    <div className='flex-column' style={{ flex: '100%', maxWidth: '33.33%' }}>
      {hasBack && <img onClick={() => onBack()} 
        style={{ marginRight: 'auto', height: 24, marginLeft: 12 }} src='images/ic_webBack@2x.png' />}
    </div>

    <div className='flex-column' style={{ flex: '100%', maxWidth: '33.33%' }}>
      <h2 className='app-name'>Lunch Tyme</h2>
    </div>

    <div className='flex-column' style={{ flex: '100%', maxWidth: '33.33%' }}>
      <img style={{ marginLeft: 'auto', height: 24, marginRight: 12 }} src='images/icon_map@2x.png' />
    </div>
  </div>
)

export default NavBar
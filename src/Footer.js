import React, { Component } from 'react'

const Footer = () => (
  <div className='footer flex-container'>
    <div className='flex-column' style={{ flex: '100%', maxWidth: '50%' }}>
      <img className='icon' src='images/tab_lunch@2x.png' />
      <p className='footer-label'>lunch</p>
    </div>
    <div className='flex-column' style={{ flex: '100%', maxWidth: '50%', opacity: 0.5 }}>
      <img className='icon' src='images/tab_internets@2x.png' />
      <p className='footer-label'>internets</p>
    </div>
  </div>
)

export default Footer
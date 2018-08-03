import React, { Component } from 'react'

const navBarStyle = {
  display: 'flex',
  fontFamily: 'Avenir',
  fontSize: 32,
  backgroundColor: '#43E895',
  color: 'white',
  height: 72,
  lineHeight: 0,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0
}

const NavBar = ({ onBack }) => (
  <div className='nav-bar flex-container'>
    <div className='flex-item'>
      <img 
        onClick={() => onBack()} 
        style={{ marginRight: 'auto', height: 24, marginLeft: 12 }} src='/images/ic_webBack@2x.png' />
    </div>

    <div className='flex-item'>
      <h2 className='app-name'>Lunch Tyme</h2>
    </div>

    <div className='flex-item'>
      <img style={{ marginLeft: 'auto', height: 24, marginRight: 12 }} src='/images/icon_map@2x.png' />
    </div>
  </div>
)

export default NavBar
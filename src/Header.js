import React from 'react';
import './Header.css'

function Header() {
  return (
    <header className='Header'>
      <h1 className='Header-AppTitle'>ToDo<span className='Header-AppSubtitle'>App</span></h1>
    </header>
  )
}

export { Header }
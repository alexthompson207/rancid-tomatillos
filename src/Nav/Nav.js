import React from 'react';
import './Nav.css'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation().pathname
  let home = true
  if(location !== '/') {
    home = false
  }
  return (
    <header className='nav'>
      <h1 className='title'>Rancid Tomatillos</h1>
      <Link to={'/'}>
        {!home && <button className='home-button' >Home</button>}
      </Link>

    </header>
  )
}

export default Nav;

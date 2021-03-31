import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = (props) => {

  return (
    <header className='nav'>
      <h1 className='title'>Rancid Tomatillos</h1>
      <Link to={'/'}>
        {!props.returnHome && <button className='home-button' >Home</button>}
      </Link>

    </header>
  )
}

export default Nav;

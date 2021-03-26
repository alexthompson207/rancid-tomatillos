import React from 'react';
import './Nav.css'

const Nav = (props) => {

  return (
    <header className='nav'>
      <h1 className='title'>Rancid Tomatillos</h1>
      {!props.homeView && <button className='home-button' onClick={props.returnHome}>Home</button>}
    </header>
  )
}

// {!this.state.homeView &&
//   <button onClick={this.returnHome}>Home</button>
// }

export default Nav;

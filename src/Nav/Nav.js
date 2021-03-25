import React from 'react';

const Nav = (props) => {

  return (
    <div>
      <div>
        <h1>Rancid Tomatillos</h1>
      </div>
      <div>
        {!props.homeView && <button onClick={props.returnHome}>Home</button>}
      </div>
    </div>
  )
}

// {!this.state.homeView &&
//   <button onClick={this.returnHome}>Home</button>
// }

export default Nav;
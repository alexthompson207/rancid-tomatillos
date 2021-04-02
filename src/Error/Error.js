import React from 'react';
import './Error.css';
import brokenVideo from '../images/broken-video.svg';
import oops from '../images/oops.svg';

const Error = ({ error, errorTrailer }) => {
  // console.log(error)
  // console.log(errorTrailer)
  const showErrorMessage = (message) => {
    if (message === 'Cannot read property \'movie\' of undefined') {
      console.log(message);
      return true;
    } else if (message === 'Cannot read property \'videos\' of undefined') {
      return true;
    } else if (message === 'Cannot read property \'movies\' of undefined') {
      console.log(message)
      return true;
    }
    return;
  }

  return (
    <>
      { showErrorMessage(error) &&
        <>
          <img className='error-icon' src={oops} alt='unhappy oops face icon'></img>
          <h1 className='error-message'>Something went wrong, please refresh and try again.</h1>
        </>
      }
      {showErrorMessage(errorTrailer) &&
        <div className='error-box'>
          <img className='error-trailer' src={brokenVideo} alt='broken video'></img>
          <p className='error-trailer-message'>Opps! This video isn't working, please refresh and try again</p>
        </div>
      }
    </>
  )
}

export default Error;
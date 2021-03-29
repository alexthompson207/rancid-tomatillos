import React from 'react';
import './Error.css';
import brokenVideo from '../images/broken-video.svg';

const Error = ({ error, errorTrailer }) => {
  return (
    <>
      { error &&
        <>
          <img className='movie-image' src='./images/broken-video.png' alt='server error icon'></img>
          <h1 className='error'>Opps! Something went wrong, please refresh and try again.</h1>
        </>
      }
      {errorTrailer &&
        <div className='error-box'>
          <img className='error-trailer' src={brokenVideo} alt='broken video image'></img>
          <p className='error-trailer-message'>Opps! This video isn't working, please refresh and try again</p>
        </div>
      }
    </>
  )
}

export default Error;
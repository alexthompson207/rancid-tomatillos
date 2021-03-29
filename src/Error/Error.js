import React from 'react';
import './Error.css';

const Error = ({ error, errorTrailer }) => {
  return (
    <>
      { error &&
        <h1 className='error'>Opps! Something went wrong, please refresh and try again.</h1>
      }
      {errorTrailer && <h1 className='errorTrailer'>broken</h1>}
    </>
  )
}

export default Error;
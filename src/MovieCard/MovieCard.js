import React from 'react';
import './MovieCard.css';

const MovieCard = () => {
  return (
    <div className='movie-card'>
      <img className='movie-image' src='https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'></img>
      <h2 className='movie-title'>Title</h2>
      <p className='movie-rating'>Rating</p>
    </div>
  )
}

export default MovieCard;
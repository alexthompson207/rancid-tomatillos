import React from 'react';
import './MovieCard.css';

const MovieCard = ({ image, title, rating }) => {
  return (
    <div className='movie-card'>
      <img className='movie-image' src={image}></img>
      <h2 className='movie-title'>{title}</h2>
      <p className='movie-rating'>{rating}</p>
    </div>
  )
}

export default MovieCard;
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ image, title, rating, id, movieClicked }) => {

  return (
    <div onClick={() => movieClicked(id)} className='movie-card' id={id}>
      <img className='movie-image' src={image} alt={title + ' movie poster'}></img>
      <section className='movie-details'>
        <h2 className='movie-title'>{title}</h2>
        <p className='movie-rating'>{Math.round(rating * 10)}%</p>
      </section>
    </div>
  )
}

export default MovieCard;

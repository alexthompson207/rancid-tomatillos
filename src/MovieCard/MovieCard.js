import React from 'react';
import './MovieCard.css';
import tomato from '../images/tomato.svg';
import badTomato from '../images/tomato-bad.svg';

const MovieCard = ({ image, title, rating, id, movieClicked }) => {

  let icon = null;

  if (rating >= 5) {
    icon = tomato;
  } else {
    icon = badTomato;
  }

  return (
    <div onClick={() => movieClicked(id)} className='movie-card' id={id}>
      <img className='movie-image' src={image} alt={title + ' movie poster'}></img>
      <section className='movie-details'>
        <h2 className='movie-title'>{title}</h2>
        <div className='rating-container'>
          <img className='movie-icon' src={icon}></img>
          <p className='movie-rating'>{Math.round(rating * 10)}%</p>
        </div>
      </section>
    </div>
  )
}

export default MovieCard;

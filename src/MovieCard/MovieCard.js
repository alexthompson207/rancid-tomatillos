import React from 'react';
import './MovieCard.css';
import tomato from '../images/tomato.svg';
import badTomato from '../images/tomato-bad.svg';
import { Link } from 'react-router-dom';

const MovieCard = ({ image, title, rating, id, movieClicked }) => {

  let icon = null;

  if (rating >= 5) {
    icon = tomato;
  } else {
    icon = badTomato;
  }

  return (
    <Link to={`/${id}`} key={id} className='movie-card'>
      <img className='movie-image' src={image} alt={title + ' movie poster'}></img>
      <section className='movie-details'>
        <h2 className='movie-title'>{title}</h2>
        <div className='rating-container'>
          <img className='movie-icon' alt='tomato icon' src={icon}></img>
          <p className='movie-rating'>{Math.round(rating * 10)}%</p>
        </div>
      </section>
    </Link>
  )
}

export default MovieCard;

import React from 'react';
import './MoviesView.css';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom'

const MoviesView = ({ movieList, movieClicked }) => {

  const movieCards = movieList.map(movie => {
    return (
        <MovieCard
          movieClicked={movieClicked}
          image={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}
          id={movie.id}
          key={movie.id}
        />
    )
  })

  return (
    <section className='movies-view'>
      {movieCards}
    </section>
  )
}

export default MoviesView;

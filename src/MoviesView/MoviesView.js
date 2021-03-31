import React from 'react';
import './MoviesView.css';
import MovieCard from '../MovieCard/MovieCard';

const MoviesView = ({ movieList }) => {

  const movieCards = movieList.map(movie => {
    return (
      <MovieCard
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

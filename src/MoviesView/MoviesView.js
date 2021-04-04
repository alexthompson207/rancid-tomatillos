import React from 'react';
import './MoviesView.css';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types'

const MoviesView = ({ filterMovies, allMovies, error, movieSearched }) => {
  let moviesToDisplay = [];
  if (!allMovies.length && !error) {
    return (
      <h1> Loading...</h1 >
    )
  }
  if (filterMovies.length && movieSearched) {
    moviesToDisplay = filterMovies;
  } else if (!filterMovies.length && movieSearched) {
    return (<h1 className='search-error'>No movies match your search, try again!</h1>)
  }
  else {
    moviesToDisplay = allMovies;

  }

  const movieCards = moviesToDisplay.map(movie => {
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

MoviesView.propTypes = {
  movieList: PropTypes.array
}

import React from 'react';
import './MoviesView.css';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types'

const MoviesView = ({ filterMovies, allMovies, error }) => {
  let moviesToDisplay = [];
  if (!allMovies.length && !error) {
    console.log('hi')
    return (
      <h1> Loading...</h1 >
    )
  }
  if (filterMovies.length) {
    console.log(filterMovies)
    moviesToDisplay = filterMovies;
  } else if (filterMovies === 'no match') {
    console.log(filterMovies)
    return (<h1>hello</h1>)
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

import React, { Component } from 'react';
import Error from '../Error/Error';
import './MovieInfo.css';

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: {},
      movieId: this.props.currentMovieId,
      error: ''
    }
  }

  componentDidMount() {
    console.log(this.state.movieId)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ currentMovie: { ...data.movie } })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    const { poster_path, backdrop_path, release_date, overview, average_rating, genres, budget, revenue, tagline, runtime, title, id } = this.state.currentMovie
    if (this.state.error) {
      return (
        <Error />
      )
    }

    if (!this.state.currentMovie.title) {
      return (
        <h1>Loading...</h1>
      )
    }
    return (
      <section className="movie-info-section">
        <h1 className='movie-info-title'>{title}</h1>
        <div className='movie-info-container'>
          <article className="movie-info">
            <h2 className='list-title'>Movie Info</h2>
            <ul className='movie-info-list'>
              <li><b>Genres:</b> {genres.join(', ')}</li>
              <li><b>Release Date:</b> {release_date}</li>
              <li><b>Runtime:</b> {runtime} minutes</li>
              <li><b>Budget:</b> ${budget}</li>
              <li><b>Revenue:</b> ${revenue}</li>
            </ul>
          </article>
          <article className="movie-description">
            <img className="backdrop-image" alt={title + 'poster'} src={backdrop_path} />
            <h2 className='movie-info-title'>{tagline}</h2>
            <h3 className='movie-info-rating'>Rating: {average_rating}</h3>
            <p className='movie-info-overview'>{overview}</p>
          </article>
        </div>
      </section>
    )
  }
}

export default MovieInfo;

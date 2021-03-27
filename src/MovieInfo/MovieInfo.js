import React, { Component } from 'react';
import Error from '../Error/Error';
import './MovieInfo.css';
import moment from 'moment'

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: {},
      movieId: this.props.currentMovieId,
      movieTrailer: {},
      error: ''
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ currentMovie: { ...data.movie } })
      })
      .catch(error => this.setState({ error: error.message }))

      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieId}/videos`)
      .then(response => response.json())
      .then(data => {
        this.setState({ movieTrailer: {...data.videos[0]}})
      })
  }

  formatCosts = (number) => {
    if (number === 0) {
      return `Not Reported`;
    }
    const trimmedTotal = number.toFixed(2);
    console.log(trimmedTotal);
    let totalFormatted = trimmedTotal.toString().split('.');
    totalFormatted[0] = totalFormatted[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return '$' + totalFormatted.join('.');
  }

  render() {
    const { poster_path, backdrop_path, release_date, overview, average_rating, genres, budget, revenue, tagline, runtime, title, id } = this.state.currentMovie



    return (
      <>
        {this.state.error && <Error />}
        {!this.state.currentMovie.title && !this.state.error && <h1>Loading...</h1>
        }
        {this.state.currentMovie.title && !this.state.error &&
          <section className="movie-info-section">
            <h1 className='movie-info-title'>{title}</h1>
            <div className='movie-info-container'>
              <article className="movie-info">
                <h2 className='list-title'>Movie Info</h2>
                <ul className='movie-info-list'>
                  <li><b>Genres:</b> {genres.join(', ')}</li>
                  <li><b>Release Date:</b> {moment(release_date).format('MMM Do YYYY')}</li>
                  <li><b>Runtime:</b> {runtime} minutes</li>
                  <li><b>Budget:</b> {this.formatCosts(budget)}</li>
                  <li><b>Revenue:</b> {this.formatCosts(revenue)}</li>
                </ul>
                <iframe className='trailer' src={'https://www.youtube.com/embed/' + this.state.movieTrailer.key}
                  frameborder='0'
                  allow='autoplay; encrypted-media'
                  allowfullscreen
                  title='video'
                />
              </article>
              <article className="movie-description">
                <img className="backdrop-image" alt={title + 'poster'} src={backdrop_path} />
                <h2 className='movie-info-title'>{tagline}</h2>
                <h3 className='movie-info-rating'>Rating: {Math.round(average_rating * 10)}%</h3>
                <p className='movie-info-overview'>{overview}</p>
              </article>
            </div>
          </section>
        }
      </>
    )
  }
}

export default MovieInfo;

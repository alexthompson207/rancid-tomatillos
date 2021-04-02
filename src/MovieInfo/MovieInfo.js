import React, { Component } from 'react';
import Error from '../Error/Error';
import './MovieInfo.css';
import moment from 'moment'
import { getMovieByID, getTrailerByID } from '../apiCalls';
import PropTypes from 'prop-types'

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: {},
      movieId: this.props.currentMovieId,
      movieTrailer: {},
      error: '',
      errorTrailer: ''
    }
  }

  componentDidMount() {
    Promise.allSettled([getMovieByID(this.state.movieId), getTrailerByID(this.state.movieId)])
      .then(data => {
        if (data[1].status === 'rejected') {
          this.setState({ currentMovie: { ...data[0].value.movie }, errorTrailer: 'error' })
        }
        this.setState({
          currentMovie: { ...data[0].value.movie },
          movieTrailer: { ...data[1].value.videos[0] }
        })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  formatCosts = (number) => {
    if (number === 0) {
      return `Not Reported`;
    }
    const trimmedTotal = number.toFixed(2);
    let totalFormatted = trimmedTotal.toString().split('.');
    totalFormatted[0] = totalFormatted[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return '$' + totalFormatted.join('.');
  }

  render() {
    const { backdrop_path, release_date, overview, average_rating, genres, budget, revenue, tagline, runtime, title, id } = this.state.currentMovie;

    return (
      <>
        {this.state.error && !this.state.errorTrailer && <Error error={this.state.error} />}
        {!this.state.currentMovie.title && !this.state.error && <h1>Loading...</h1>
        }
        {this.state.currentMovie.title &&
          <section className='movie-info-section' id={id}>
            <h1 className='movie-info-title'>{title}</h1>
            <div className='movie-info-container'>
              <article className="movie-info-left">
                <div className='movie-info'>
                  <h2 className='list-title'>Movie Info</h2>
                  <ul className='movie-info-list'>
                    <li><b>Genres:</b> {genres.join(', ')}</li>
                    <li><b>Release Date:</b> {moment(release_date).format('MMM Do YYYY')}</li>
                    <li><b>Runtime:</b> {runtime} minutes</li>
                    <li><b>Budget:</b> {this.formatCosts(budget)}</li>
                    <li><b>Revenue:</b> {this.formatCosts(revenue)}</li>
                  </ul>
                </div>
                <img className="backdrop-image" alt={title + 'poster'} src={backdrop_path} />
                <div></div>
              </article>
              <article className="movie-description">
                {this.state.error && <Error errorTrailer={this.state.errorTrailer} />}
                {!this.state.error &&
                  <iframe className='trailer' src={'https://www.youtube.com/embed/' + this.state.movieTrailer.key}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    alt={`${title} movie trailer`}
                  />}
                <h2 className='movie-info-tagline'>{tagline}</h2>
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

MovieInfo.propTypes = {
  movieId: PropTypes.number
}

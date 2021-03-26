import React, { Component } from 'react';
import './MovieInfo.css';

class MovieInfo extends Component {
  constructor() {
    super();
    // this.state = {
    //   movieInfo: { id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: [{ id: 18, name: "Drama" }], budget: 63000000, revenue: 100853753, runtime: 139, tagline: "It's a movie!" }
    // }
  }

  render() {
    const { poster_path, backdrop_path, release_date, overview, average_rating, genres, budget, revenue, tagline, runtime, title, id } = this.props.currentMovie.movie
    return (
      <section className="movie-info-section">
        <h1 className='movie-info-title'>{title}</h1>
        <div className='movie-info-container'>
          <article className="movie-info">
            <h2 className='list-title'>Movie Info</h2>
            <ul className='movie-info-list'>
              <li><b>Genres:</b> {genres[0].name}</li>
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

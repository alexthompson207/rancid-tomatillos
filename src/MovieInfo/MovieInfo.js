import React, { Component } from 'react';
import './MovieInfo.css';

class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {
      movieInfo: { id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: [{ id: 18, name: "Drama" }], budget: 63000000, revenue: 100853753, runtime: 139, tagline: "It's a movie!" }
    }
  }

  render() {
    const { poster_path, backdrop_path, release_date, overview, average_rating, genres, budget, revenue, tagline, runtime, title, id } = this.state.movieInfo
    return (
      <section className="movie-info-section">
        <h1>{title}</h1>
        <article className="movie-details">
          <li>{genres[0].name}</li>
          <li>{release_date}</li>
          <li>{runtime}</li>
          <li>{budget}</li>
          <li>{revenue}</li>
        </article>
        <article className="movied-description">
          <img className="backdrop-image" src={backdrop_path} />
          <h2>{tagline}</h2>
          <h2>{average_rating}</h2>
          <p>{overview}</p>
        </article>
      </section>
    )
  }
}

export default MovieInfo;

import React, { Component } from 'react';
import './App.css';
import movieData from './data';
import MoviesView from './MoviesView/MoviesView';
import MovieInfo from './MovieInfo/MovieInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      currentMovie: []
    }
  }

  clickedMovie = (id) => {
    console.log(id)
    const matchingMovie = this.state.movies.find(movie => id === movie.id)
    this.setState({ currentMovie: [matchingMovie] })
  }

  render() {
    return (
      <div className="App" >
        <h1>Rancid Tomatillos</h1>
        {!this.state.currentMovie.length &&
          <MoviesView movieList={this.state.movies} movieClicked={this.clickedMovie}/>
        }
        {this.state.currentMovie.length &&
          <MovieInfo />
          }
      </div>
    );

  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import movieData from './data';
import MoviesView from './MoviesView/MoviesView';
import MovieInfo from './MovieInfo/MovieInfo';
import Nav from './Nav/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      currentMovie: [],
      homeView: true
    }
  }

  clickedMovie = (id) => {
    const matchingMovie = this.state.movies.find(movie => id === movie.id)
    this.setState({ currentMovie: [matchingMovie], homeView: false })
  }

  returnHome = () => {
    this.setState({ currentMovie: [], homeView: true })
  }

  render() {
    return (
      <div className="App" >
        <Nav returnHome={this.returnHome} homeView={this.state.homeView} />

        {!this.state.currentMovie.length &&
          <MoviesView movieList={this.state.movies} movieClicked={this.clickedMovie} />
        }
        {!this.state.homeView &&
          <MovieInfo />
        }
      </div>
    );

  }
}

export default App;

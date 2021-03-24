import React, { Component } from 'react';
import './App.css';
import movieData from './data';
import MoviesView from './MoviesView/MoviesView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <div className="App" >
        <h1>Rancid Tomatillos</h1>
        <MoviesView movieList={this.state.movies} />
      </div>
    );

  }
}

export default App;

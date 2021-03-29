import React, { Component } from 'react';
import './App.css';
import MoviesView from './MoviesView/MoviesView';
import MovieInfo from './MovieInfo/MovieInfo';
import Nav from './Nav/Nav';
import Error from './Error/Error';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovieId: 0,
      homeView: true,
      error: ''
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  clickedMovie = (id) => {
    this.setState({ currentMovieId: id, homeView: false })
  }

  returnHome = () => {
    this.setState({ currentMovie: [], homeView: true })
  }

  render() {

    return (
      <div className="App" >
        <Nav returnHome={this.returnHome} homeView={this.state.homeView} />
        {this.state.error && <Error error={this.state.error} />}
        {!this.state.movies.length && !this.state.error && <h1>Loading...</h1>}
        {this.state.homeView &&
          <MoviesView movieList={this.state.movies} movieClicked={this.clickedMovie} />
        }
        {!this.state.homeView &&
          <MovieInfo currentMovieId={this.state.currentMovieId} />
        }
      </div>
    );

  }
}

export default App;

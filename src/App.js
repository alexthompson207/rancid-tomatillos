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
      movies: [],
      currentMovie: {},
      homeView: true
    }
  }

  componentDidMount () {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => {
      this.setState( {movies: data.movies} )
    })
  }

  clickedMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({ currentMovie: data, homeView: false })
    })
  }

  returnHome = () => {
    this.setState({ currentMovie: [], homeView: true })
  }

  render() {
    return (
      <div className="App" >
        <Nav returnHome={this.returnHome} homeView={this.state.homeView} />

        {this.state.homeView &&
          <MoviesView movieList={this.state.movies} movieClicked={this.clickedMovie} />
        }
        {!this.state.homeView &&
          <MovieInfo currentMovie={this.state.currentMovie}/>
        }
      </div>
    );

  }
}

export default App;

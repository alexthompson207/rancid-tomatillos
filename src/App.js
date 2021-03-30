import React, { Component } from 'react';
import './App.css';
import MoviesView from './MoviesView/MoviesView';
import MovieInfo from './MovieInfo/MovieInfo';
import Nav from './Nav/Nav';
import Error from './Error/Error';
import { getAllMovies } from './apiCalls';
import { Route, Link, Switch } from 'react-router-dom'

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
    getAllMovies()
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
        <Route exact path='/' render={() => <MoviesView movieList={this.state.movies} movieClicked={this.clickedMovie} />} />
        <Route exact path='/:id' render={({match}) => {
          const { id } = match.params;
          return <MovieInfo currentMovieId={id} />}
        } />
      </div>
    );

  }
}

export default App;

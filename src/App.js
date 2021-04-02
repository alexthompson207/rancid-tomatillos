import React, { Component } from 'react';
import './App.css';
import MoviesView from './MoviesView/MoviesView';
import MovieInfo from './MovieInfo/MovieInfo';
import Nav from './Nav/Nav';
import Error from './Error/Error';
import { getAllMovies } from './apiCalls';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
    getAllMovies()
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(error => {
        console.log(error.message)
        this.setState({ error: error.message })
      })
  }

  render() {
    return (
      <div className="App" >
        <Nav />
        {this.state.error && <Error error={this.state.error} />}
        {!this.state.movies.length && !this.state.error && <h1>Loading...</h1>}
        <Switch>
          <Route exact path='/' render={() => <MoviesView movieList={this.state.movies} />} />
          <Route exact path='/movies/:id' render={({ match }) => {
            const { id } = match.params;
            return (<MovieInfo currentMovieId={id} />)
          }
          } />
          <Route path='*' render={() => <h1>Path doesn't exisit. Please check the url</h1>} />
        </Switch>
      </div>
    );

  }
}

export default App;

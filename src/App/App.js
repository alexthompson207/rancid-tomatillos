import React, { Component } from 'react';
import './App.css';
import MoviesView from '../MoviesView/MoviesView';
import MovieInfo from '../MovieInfo/MovieInfo';
import SearchBar from '../Search-Bar/Search-Bar';
import Nav from '../Nav/Nav';
import Error from '../Error/Error';
import { getAllMovies } from '../apiCalls';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      search: '',
      filteredMovies: [],
      movieSearched: false
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

  searchMovies = (event) => {
    const value = event.target.value
    const searchMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));
    this.setState({ filteredMovies: searchMovies, movieSearched: true })
  }

  resetMoviesView = () => {
    this.setState({ movieSearched: false })
  }

  render() {
    return (
      <div className="App" >
        <Nav />
        {this.state.error && <Error error={this.state.error} />}
        {/* {!this.state.movies.length && !this.state.error && <h1>Loading...</h1>} */}
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <SearchBar searchMovies={this.searchMovies} reset={this.resetMoviesView} />
                <MoviesView filterMovies={this.state.filteredMovies}
                  allMovies={this.state.movies}
                  error={this.state.error}
                  movieSearched={this.state.movieSearched} />
              </>
            )
          }
          } />
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

import React, { Component } from 'react';
import './App.css';
import MoviesView from './MoviesView/MoviesView';
import MovieInfo from './MovieInfo/MovieInfo';
import SearchBar from './Search-Bar/Search-Bar';
import Nav from './Nav/Nav';
import Error from './Error/Error';
import { getAllMovies } from './apiCalls';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      searchMovies: [],
      search: ''
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

  handleSearch = (event) => {
    this.setState({ search: event.target.value })
  }

  searchMovies = (event) => {
    let value = event.target.value
    const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))
    this.setState({ searchMovies: filteredMovies })

  }

  render() {
    return (
      <div className="App" >
        <Nav />
        {this.state.error && <Error error={this.state.error} />}
        {!this.state.movies.length && !this.state.error && <h1>Loading...</h1>}
        <Switch>
          <Route exact path='/' render={() => {
            return(
              <>
                <SearchBar searchMovies={this.searchMovies} handleSearch={this.handleSearch} />
                <MoviesView movieList={this.state.searchMovies} />
              </>
            )}
          }/>
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

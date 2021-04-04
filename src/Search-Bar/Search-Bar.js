import React, { Component } from 'react';
import './Search-Bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
    console.log(props)
  }

  handleSearch = (event) => {
    this.props.searchMovies(event);
    console.log(event.target.value)
    this.setState({ search: event.target.value })
  }

  clearSearch = (event) => {
    event.preventDefault();
    this.props.reset();
    this.setState({ search: '' })
  }

  render() {
    return (
      <form className='search-form' >
        <input className='search-input'
          name='search-bar'
          placeholder='Search Movies'
          type='text'
          aria-label='Search Movies'
          value={this.state.search}
          onChange={event => this.handleSearch(event)}
        />
        <button className='clear-btn'
          onClick={event => this.clearSearch(event)}>Clear Search
        </button>
      </form>
    )
  }
}

export default SearchBar;

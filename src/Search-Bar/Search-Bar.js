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


  render() {
    return (
      <form className='search-form' >
        <input className='search-input'
          name='search-bar'
          placeholder='Search Movies'
          type='text'
          value={this.state.search}
          onChange={event => this.handleSearch(event)}
        />
        <button>Button</button>
      </form>
    )
  }
}

export default SearchBar;

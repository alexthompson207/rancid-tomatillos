import React, { Component } from 'react';
import './Search-Bar.css';

// class SearchBar extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       search: ''
//     }
//
//   }

const SearchBar = (props) => {
  // handleChange = event => {
  //   this.setState( { input: event.target.value } )
  // }
    return (
      <form className='search-form'>
        <input className='search-input'
          name='search-bar'
          placeholder='Search Movies'
          type='text'
          // value={event => props.handleSearch(event)}
          onChange={event => props.searchMovies(event)}
        />
        <button>Button</button>
      </form>
    )
}

export default SearchBar;

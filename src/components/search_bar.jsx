/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-search form-control"
        onChange={this.handleChange}
        placeholder="search gifs"
      />
    );
  }
}

export default SearchBar;

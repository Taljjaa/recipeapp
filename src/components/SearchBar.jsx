import React from 'react';

export class SearchBar extends React.Component {
  state = {
    searchInput: '',
  };

  handleFormChange = value => {
    this.setState({
      searchInput: value,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          className="searchBar"
          placeholder="Search"
          value={this.state.searchInput}
          onChange={event => this.handleFormChange(event.target.value)}
        />
      </div>
    );
  }
}

import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => (
  <div className="search-container">
    <input
      type="text"
      placeholder="Enter movie name"
      value={searchTerm}
      onChange={handleSearch}
    />
  </div>
);

export default SearchBar;

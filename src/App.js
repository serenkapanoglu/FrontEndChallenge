import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import Dropdown from './components/Dropdown'
import MovieList from './components/MovieList'
import StarRating from './components/StarRating'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isRatingDropdownOpen, setRatingDropdownOpen] = useState(false);
  const [isGenreDropdownOpen, setGenreDropdownOpen] = useState(false);

  const movies = [
    { id: 1, name: 'The Matrix', category: 'Action', rating: 7.5 },
    { id: 2, name: 'Focus', category: 'Comedy', rating: 6.9 },
    { id: 3, name: 'The Lazarus Effect', category: 'Thriller', rating: 6.4 },
    { id: 4, name: 'Everly', category: 'Action', rating: 5.0 },
    { id: 5, name: 'Maps to the Stars', category: 'Drama', rating: 7.5 },
  ];

  const categories = ['Action', 'Comedy', 'Thriller', 'Drama'];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRatingChange = (value) => {
    setSelectedRatings((prevRatings) =>
      prevRatings.includes(value)
        ? prevRatings.filter((rating) => rating !== value)
        : [...prevRatings, value]
    );
  };

  const handleCategoryChange = (value) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(value)
        ? prevCategories.filter((category) => category !== value)
        : [...prevCategories, value]
    );
  };

  const filteredMovies = movies.filter(
    (movie) =>
      (searchTerm === '' ||
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedRatings.length === 0 ||
        selectedRatings.some(
          (rating) => Math.floor(movie.rating) === rating
        )) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(movie.category))
  );

  return (
    <div className="App">
      <div className="search-and-dropdowns">
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <Dropdown
          title="Rating"
          isOpen={isRatingDropdownOpen}
          toggle={() => setRatingDropdownOpen(!isRatingDropdownOpen)}
          options={[...Array(10).keys()].map((i) => i + 1)}
          selectedOptions={selectedRatings}
          handleOptionChange={handleRatingChange}
          renderOption={(option) => <StarRating rating={option} />}
        />
        <Dropdown
          title="Genre"
          isOpen={isGenreDropdownOpen}
          toggle={() => setGenreDropdownOpen(!isGenreDropdownOpen)}
          options={categories}
          selectedOptions={selectedCategories}
          handleOptionChange={handleCategoryChange}
        />
      </div>
      <MovieList movies={filteredMovies} searchTerm={searchTerm} />
    </div>
  );
};

export default App;

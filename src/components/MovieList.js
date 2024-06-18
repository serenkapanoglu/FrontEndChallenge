import React from 'react';
import StarRating from './StarRating';

const MovieList = ({ movies, searchTerm }) => {
  const getFilterMovieHeight = () => {
    const baseHeight = 0;
    const movieHeight = 70;
    return baseHeight + movies.length * movieHeight;
  };

  return (
    searchTerm !== '' && (
      <div className="filteredMovies">
        <ul className="filterMovie" style={{ height: getFilterMovieHeight() + 'px' }}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <div className="movie-title">
                {movie.name}
                <span className="movie-category">{movie.category}</span>
              </div>
              <div className="movie-rating">
                <StarRating rating={movie.rating} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default MovieList;

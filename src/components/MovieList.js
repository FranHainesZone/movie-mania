import React from 'react';
import MovieDisplay from './MovieDisplay';
import { render } from '@testing-library/react';

const MovieList = (props) => {
  const { movies, genres, rating } = props;

  // Compare items
  const compare = (value) => {
    return (a, b) => a[value] > b[value] ? -1 : 1;
  }

  const moviesSort = movies.sort(compare('popularity'));

  // Map over sorted movies and set to renderMovies var
  const renderMovies = moviesSort
    // Filter through each movie with visibility set to true
    .filter(movie => movie.visibility)
    // map over sorted movies state (ref as movie)
    .map((movie) => {
      // Empty array for formatted genre names
      let movieGenres = [];
      // check inputs have been checked
      if(movie.genre_ids) {
        // reassign inputs to array
        movieGenres = movie.genre_ids
          // map over checked genres
          .map(genreId => genres
          // Find genre ID names that match filtered state
          .find(genres => genres.id === genreId).name);
      }

      // If vote average is less than rating, return null
      if (movie.vote_average < rating) {
        return null;
      // Else display the movie and pass props down to MovieDisplay component
      } else {
        return (
          <MovieDisplay 
            key={movie.id} 
            movie={movie}
            movieGenres={movieGenres}
          />
        )
      }
  });
  
  // Display rendered movies
  return (
    <div className="ui stackable four column grid" id="render-movies" data-testid="render-movies">
      {renderMovies}
    </div>
  )
}

export default MovieList;
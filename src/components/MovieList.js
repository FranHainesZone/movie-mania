import React from 'react';
import MovieDisplay from './MovieDisplay';

class MovieList extends React.Component {
    render() {
        // Sort movies by order of popularity
        const moviesSort = this.props.movies
            .sort((a,b) => a.popularity > b.popularity ? -1 : 1);

        // Map over sorted movies and set to renderMovies var
        const renderMovies = moviesSort
            .map((movie) => {
                // If vote average is less than rating, return null
                if (movie.vote_average < this.props.rating) {
                    return null;
                // Else display the movie and pass props down to MovieDisplay component
                } else {
                    return <MovieDisplay key={movie.id} movie={movie} />
                }
        });
        
        // Display rendered movies
        return <div className="ui stackable four column grid">{renderMovies}</div>
    }
}

export default MovieList;
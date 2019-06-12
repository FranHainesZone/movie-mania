import React from 'react';
import MovieDisplay from './MovieDisplay';

class MovieList extends React.Component {
    
    render() {
        
        // Sort movies by order of popularity
        const moviesSort = this.props.movies
            .sort((a,b) => a.popularity > b.popularity ? -1 : 1);

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
                        .map(genreId => this.props.genres
                        // Find genre ID names that match filtered state
                        .find(genres => genres.id === genreId).name);
                }

                // If vote average is less than rating, return null
                if (movie.vote_average < this.props.rating) {
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
        return <div className="ui stackable four column grid">{renderMovies}</div>
    }
}

export default MovieList;
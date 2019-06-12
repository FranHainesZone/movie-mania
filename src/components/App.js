import React from 'react';
import tmdb from '../apis/tmdb';
import MovieList from './MovieList'
import Genre from './Genre';
import Rating from './Rating';
import './App.css';

class App extends React.Component {
    state = { 
        // Set initial state
        movies: [], 
        genres: [],
        filteredGenres: {
            filteredGenresId: []
        }
    };

    componentDidMount() {
        // On load, get movies and genres
        this.getGenres();
        this.getMovies();
    };

    getGenres = async () => {
        const response = await tmdb.get('/genre/movie/list');

        // Set response as state for genres
        this.setState({ 
            genres: response.data.genres 
        });
    };

    getMovies = async () => {
        const response = await tmdb.get('/movie/now_playing');

        // Set response as state for movies
        this.setState({ 
            movies: response.data.results
            .map(movie => ({
                ...movie,
                // spread and set flag property to true
                visibility: true
              }))
        });
    };

    genreChecked = (id) => {
        this.setState({
            filteredGenres: { 
                // add selected IDs to filteredGenres state
                filteredGenresId: this.state.filteredGenres.filteredGenresId.concat(id)
            }
        }, this.filterResults);
    };
    
    genreUnchecked = (id) => {
        this.setState({
            filteredGenres: {
                // Filter filteredGenres state if checked ID doesn't match
                filteredGenresId: this.state.filteredGenres.filteredGenresId.filter(filteredGenreId => !(filteredGenreId === id))
            }
        }, this.filterResults);
    };
    
    filterResults = () => {
        this.setState({
          movies: this.state.movies
            .map(movie => ({
              ...movie,
              // check each genre ID checked in filter state matches movie genre ID
              visibility: this.state.filteredGenres.filteredGenresId.every(filteredGenreId => movie.genre_ids.includes(filteredGenreId))
            }))
        });
    }

    ratingChange = (result) => {
        // Set rating state to the target value
        this.setState({
          rating: result
        });
    };

    render() {
        return (
            <div className="ui main container">
                <header className="ui dividing header">
                    <div className="ui one column grid">
                        <div className="column">
                            <h1>Movie Listings</h1>
                        </div>
                    </div>
                </header>

                <div className="ui grid"> 
                    <div className="twelve wide column">              
                        <MovieList 
                            genres={this.state.genres} 
                            movies={this.state.movies} 
                            rating={this.state.rating} 
                            filteredGenres={this.state.filteredGenres}
                        />
                    </div>  
                    <div className="four wide column">  
                        <div className="ui list">
                            <h2>Filter by Rating</h2>
                            <Rating 
                                ratingChange={this.ratingChange} 
                            />
                            <h2>Filter by Genre</h2>
                            <Genre 
                                genres={this.state.genres} 
                                filteredGenres={this.state.filteredGenres} 
                                onSelected={this.genreChecked} 
                                onRemoved={this.genreUnchecked} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 
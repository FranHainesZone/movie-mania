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
    filteredGenres: [],
    rating: 3
  };

  componentDidMount() {
    // On load, get movies and genres
    this.getGenres();
    this.getMovies();
  };

  getGenres = async () => {
    const response = await tmdb.get('/genre/movie/list');

    // Destructuring genres from response.data
    const { genres } = response.data;

    // Set response as state for genres
    this.setState({ 
      // would be genres: genres
      genres
    });
  };

  getMovies = async () => {
    const response = await tmdb.get('/movie/now_playing');

    // destructure results
    const { results } = response.data;

    // Set response as state for movies
    this.setState({ 
      movies: results
      .map(movie => ({
        ...movie,
        // spread and set flag property to true
        visibility: true
      }))
    });
  };

  genreChecked = (id) => {
    const { filteredGenres } = this.state;

    this.setState({
      filteredGenres: filteredGenres.concat(id)
    }, this.filterResults);
  };
    
  genreUnchecked = (id) => {
    const { filteredGenres } = this.state;

    this.setState({
      // Filter filteredGenres state if checked ID doesn't match
      filteredGenres: filteredGenres.filter(filteredGenreId => !(filteredGenreId === id))
    }, this.filterResults);
  };
  
  filterResults = () => {
      const { movies, filteredGenres } = this.state;

      this.setState({
        movies: movies
          .map(movie => ({
            ...movie,
            // check each genre ID checked in filter state matches movie genre ID & spread in results
            visibility: filteredGenres.every(filteredGenreId => movie.genre_ids.includes(filteredGenreId))
          }))
      });
  }

  ratingChange = (result) => {
    // Set rating state to the target value
    this.setState({
      rating: result
    });
  };

  // Compare items
  compare = (value) => {
    return (a, b) => a[value] > b[value] ? -1 : 1;
  }

  render() {
    const { genres, movies, rating, filteredGenres } = this.state;

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
              genres={genres} 
              movies={movies} 
              rating={rating} 
              compare={this.compare} 
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
                genres={genres} 
                filteredGenres={filteredGenres} 
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
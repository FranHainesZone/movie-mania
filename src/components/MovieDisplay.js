import React from 'react';

class MovieDisplay extends React.Component {
    render() {
        const { movie, movieGenres } = this.props;

        return (
            <div className="column">
                <div className="image">
                    <img className="ui fluid image" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>
                </div>
                <div className="content">
                    <h4 className="header">{movie.title}</h4>
                    <p className="description">{movieGenres.join(', ')}</p>
                </div>
            </div>
        )
    }
}

export default MovieDisplay;
import React from 'react';

class MovieDisplay extends React.Component {
    render() {
        return (
            <div className="column">
                <div className="image">
                    <img className="ui fluid image" src={`https://image.tmdb.org/t/p/w200/${this.props.movie.poster_path}`} alt={this.props.movie.title}/>
                </div>
                <div className="content">
                    <h4 className="header">{this.props.movie.title}</h4>
                    <p className="description">{this.props.movieGenres.join(', ')}</p>
                </div>
            </div>
        )
    }
}

export default MovieDisplay;
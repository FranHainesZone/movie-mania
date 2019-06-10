import React from 'react';

class Genre extends React.Component {
    render() {  
        // Map over genres and display
        const renderGenres = this.props.genres.map((genre) => {
            return (
                <div className="item" key={genre.id}>
                    <div className="ui checkbox">
                        <input 
                            type="checkbox" 
                            value={genre.id}
                            id={genre.id} 
                            name="genre"
                        />
                        <label htmlFor={genre.id}>{genre.name}</label>
                    </div>
                </div>
            )
        });

        return <div>{renderGenres}</div>
    }
}

export default Genre;
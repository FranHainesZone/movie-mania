import React from 'react';

class Genre extends React.Component {
    render() { 
        const renderGenres = this.props.genres.map((genre) => {

            this.handleChange = (e) => {
                // if event target is checked
                if (e.target.checked) {
                    // pass ID to selected function
                    this.props.onSelected(genre.id);
                // else pass ID to remvoed function
                } else if (!e.target.checked) {
                    this.props.onRemoved(genre.id);
                }
            };
        
            return (
                <div className="item" key={genre.id}>
                    <div className="ui checkbox">
                        <input 
                            type="checkbox" 
                            value={genre.id}
                            id={genre.id}
                            name="genre"
                            onChange={this.handleChange}
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
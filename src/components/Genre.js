import React from 'react';

class Genre extends React.Component {
    render() { 
        const { genres, onSelected, onRemoved } = this.props;

        const renderGenres = genres.map((genre) => {

            const { id, name } = genre;

            this.handleChange = (e) => {
                // if event target is checked
                if (e.target.checked) {
                    // pass ID to selected function
                    onSelected(id);
                // else pass ID to remvoed function
                } else if (!e.target.checked) {
                    onRemoved(id);
                }
            };
        
            return (
                <div className="item" key={id}>
                    <div className="ui checkbox">
                        <input 
                            type="checkbox" 
                            value={id}
                            id={id}
                            name="genre"
                            onChange={this.handleChange}
                        />
                        <label htmlFor={id}>{name}</label>
                    </div>
                </div>
            )
        });

        return <div>{renderGenres}</div>
    }
}

export default Genre;
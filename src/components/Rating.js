import React from 'react';

class Rating extends React.Component {
    constructor(props) {
        super(props);
    
        // set initial rating state as 3
        this.state = {
          rating: 3
        };
    }

    // trigger event - set rating state as target value
    handleChange = (e) => {
        this.setState({rating: e.target.value});   
        // Trigger ratingChange function and pass target value to App component
        this.props.ratingChange(e.target.value); 
    }

    render() {
        return (
            <div>
                <div>{this.state.rating}</div>
                <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    // Display value as rating state
                    value={this.state.rating} 
                    // on change, run handleChange function
                    onChange={this.handleChange}
                    step="0.5"
                />
            </div>
        )
    }
};

export default Rating;
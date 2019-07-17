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

  // Pass PROPS through to function
  render(rating) {
    return (
      <div>
        <div>{rating}</div>
        <input 
          type="range" 
          min="0" 
          max="10" 
          // Display value as rating state
          value={rating} 
          // on change, run handleChange function
          onChange={this.handleChange}
          step="0.5"
        />
      </div>
    )
  }
};

export default Rating;
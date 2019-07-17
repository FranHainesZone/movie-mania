import React from 'react';

class Rating extends React.Component {
  // trigger event - set rating state as target value
  handleChange = (e) => {
    const { ratingChange } = this.props;
    ratingChange(e.target.value); 
  }

  // Pass PROPS through to function
  render() {
  
    const { rating } = this.props;
    return (
      <div>
        <input 
          type="range" 
          min="0" 
          max="10" 
          // Display value as rating state
          value={rating} 
          // on change, run handleChange function
          // COULD ALSO DO:
          // onChange={(e) => ratingChange(e.target.value)}
          // But want to keep it in a way that is simpler for me to understand
          onChange={this.handleChange}
          step="0.5"
        />
      </div>
    )
  }
};

export default Rating;
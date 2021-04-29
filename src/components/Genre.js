import React from 'react';

const Genre = (props) =>  {
  const { genres, onSelected, onRemoved } = props;

  const renderGenres = genres.map((genre) => {

    const { id, name } = genre;

    const handleChange = (e) => {
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
        <div className="ui checkbox description">
          <input 
            type="checkbox" 
            value={id}
            id={id}
            name="genre"
            onChange={handleChange}
          />
          <label htmlFor={id}><span className="description">{name}</span></label>
        </div>
      </div>
    )
  });

  return <div>{renderGenres}</div>
}

export default Genre;
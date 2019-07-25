import React from 'react';
import {
  render,
  cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDisplay from '../components/MovieDisplay';

afterEach(cleanup);

test('pass data to results', () => {
  const movie = {
    'title': 'The Lion King',
    'poster_path': '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg'
  };

  const movieGenres = ['Adventure', 'Animation', 'Family', 'Drama', 'Action'];

  const { getByTestId } = render (
    <MovieDisplay 
      key={movie.id} 
      movie={movie} 
      movieGenres={movieGenres} 
    /> 
  );

  expect(getByTestId('movie-title')).toHaveTextContent('The Lion King');
});


import React from 'react';
import {
  render,
  cleanup,
  fireEvent
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rating from '../components/Rating';
import MovieList from '../components/MovieList';

afterEach(cleanup);

// Render Check
// Check set initial rating to 3
test('sets initial rating', () => {
  const { getByTestId } = render (
    <Rating rating='3' />  
  );

  expect(getByTestId('rating').value).toBe('3');
});

// Calls function when range is changed
test('calls function when range is changed', () => {
  const handleChange = jest.fn();
  const { getByTestId } = render (
    <Rating ratingChange={handleChange} />
  );
  const ratingInput = getByTestId('rating');

  fireEvent.change(ratingInput, {target: {value: 7}});
  expect(handleChange).toHaveBeenCalledTimes(1);
});


test('returns films with rating that is higher than 7', () => {
  const rating = 7;
  const genres = [
    {
      'id': 28,
      'name': 'Action'
    },
    {
      'id': 12,
      'name': 'Adventure'
    },
    {
      'id': 16,
      'name': 'Animation'
    },
    {
      'id': 35,
      'name': 'Comedy'
    },
    {
      'id': 80,
      'name': 'Crime'
    },
    {
      'id': 99,
      'name': 'Documentary'
    },
    {
      'id': 18,
      'name': 'Drama'
    },
    {
      'id': 10751,
      'name': 'Family'
    },
    {
      'id': 14,
      'name': 'Fantasy'
    },
    {
      'id': 36,
      'name': 'History'
    },
    {
      'id': 27,
      'name': 'Horror'
    },
    {
      'id': 10402,
      'name': 'Music'
    },
    {
      'id': 9648,
      'name': 'Mystery'
    },
    {
      'id': 10749,
      'name': 'Romance'
    },
    {
      'id': 878,
      'name': 'Science Fiction'
    },
    {
      'id': 10770,
      'name': 'TV Movie'
    },
    {
      'id': 53,
      'name': 'Thriller'
    },
    {
      'id': 10752,
      'name': 'War'
    },
    {
      'id': 37,
      'name': 'Western'
    }
  ];
  const movies = [
    {
      'vote_count': 697,
      'id': 420818,
      'vote_average': 7.2,
      'title': 'The Lion King',
      'popularity': 523.663,
      'poster_path': '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
      'genre_ids': [
        12,
        16,
        10751,
        18,
        28
      ],
      'visibility': true
    },
    {
      'vote_count': 2287,
      'id': 429617,
      'vote_average': 1,
      'title': 'Spider-Man: Far from Home',
      'popularity': 277.861,
      'poster_path': '/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg',
      'genre_ids': [
        28,
        12,
        878
      ],
      'visibility': true
    },
    {
      'vote_count': 1709,
      'id': 447404,
      'vote_average': 1,
      'title': 'Pokémon Detective Pikachu',
      'popularity': 160.346,
      'poster_path': '/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg',
      'genre_ids': [
        9648,
        10751,
        35,
        878,
        28,
        12
      ],
      'visibility': true
    }
  ];

  const { getByTestId } = render (
    <MovieList             
      genres={genres} 
      movies={movies} 
      rating={rating} 
    />
  );
  
  expect(getByTestId('render-movies').children.length).toBe(1);
});
import React from 'react';
import {
  cleanup,
  render
} from '@testing-library/react';
import App from '../components/App';

afterEach(cleanup);

test('renders the app on page load', () => {
  const div = document.createElement('div');
  const renderComponent = render(<App />, div);
  renderComponent;
});
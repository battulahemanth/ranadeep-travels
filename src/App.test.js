import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock(
  'react-router-dom',
  () => ({
    BrowserRouter: ({ children }) => <>{children}</>,
    Routes: ({ children }) => <>{children}</>,
    Route: ({ element }) => element,
  }),
  { virtual: true }
);

import App from './App';

test('renders navbar and home page content', () => {
  render(<App />);

  expect(screen.getByAltText(/Ranadeep Travels/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Welcome to Ranadeep Travels/i).length).toBeGreaterThanOrEqual(1);
  expect(screen.getAllByRole('button', { name: /Explore More/i }).length).toBeGreaterThanOrEqual(1);
});

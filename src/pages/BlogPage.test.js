import { render, screen } from '@testing-library/react';
import BlogPage from './BlogPage';

test('renders blog posts and read more buttons', () => {
  render(<BlogPage />);

  expect(screen.getByText(/Top 10 Hill Stations to Visit in India/i)).toBeInTheDocument();
  expect(screen.getByText(/Best Bus Routes for a Comfortable Journey/i)).toBeInTheDocument();
  expect(screen.getByText(/Cultural Festivals You Shouldn’t Miss/i)).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /Read More/i })).toHaveLength(3);
});

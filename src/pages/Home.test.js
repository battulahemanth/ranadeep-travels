import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home hero, services, and brand content', () => {
  render(<Home />);

  expect(screen.getByText(/Welcome to Ranadeep Travels/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Explore More/i })).toBeInTheDocument();
  expect(screen.getByText(/BRANDS/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Travel Services/i })).toBeInTheDocument();
  expect(screen.getAllByRole('img', { name: /Car/i }).length).toBeGreaterThanOrEqual(3);
});

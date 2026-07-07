import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

test('renders about page hero and company mission', () => {
  render(<AboutPage />);

  expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument();
  expect(screen.getByText(/Our mission is to provide personalized travel experiences/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Our Story/i })).toBeInTheDocument();
});

import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders logo and navigation links', () => {
    render(<Navbar />);

    expect(screen.getByAltText(/Ranadeep Travels/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Vehicle Listing/i })).toBeInTheDocument();
  });

  test('toggles dropdown menu when Vehicle Listing is clicked', () => {
    render(<Navbar />);
    const dropdownButton = screen.getByRole('button', { name: /Vehicle Listing/i });

    fireEvent.click(dropdownButton);

    expect(screen.getByText(/Car Rental/i)).toBeInTheDocument();
    expect(screen.getByText(/Bus Booking/i)).toBeInTheDocument();
  });

  test('toggles mobile menu when hamburger is clicked', () => {
    const { container } = render(<Navbar />);
    const hamburger = container.querySelector('.hamburger');
    const navLinks = container.querySelector('.nav-links');

    expect(navLinks).not.toHaveClass('active');
    fireEvent.click(hamburger);
    expect(navLinks).toHaveClass('active');
  });
});

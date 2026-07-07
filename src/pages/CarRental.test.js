import { render, screen, fireEvent } from '@testing-library/react';
import { CarRental } from './CarRental';

describe('CarRental', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    jest.spyOn(window, 'open').mockImplementation(() => null);
  });

  afterEach(() => {
    window.alert.mockRestore();
    window.open.mockRestore();
  });

  test('renders car rental form and booking buttons', () => {
    render(<CarRental />);

    expect(screen.getByRole('heading', { name: /Car Rentals/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Book Now/i }).length).toBeGreaterThanOrEqual(1);
  });

  test('shows alert when booking without required form fields', () => {
    render(<CarRental />);

    fireEvent.click(screen.getAllByRole('button', { name: /Book Now/i })[0]);
    expect(window.alert).toHaveBeenCalledWith('Please fill pickup, drop, and date before booking!');
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import BusRentalPage from './BusRentalPage';

describe('BusRentalPage', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    window.alert.mockRestore();
  });

  test('renders available bus options', () => {
    render(<BusRentalPage />);

    expect(screen.getByText(/Available Buses/i)).toBeInTheDocument();
    expect(screen.getByText(/AC Sleeper Bus/i)).toBeInTheDocument();
    expect(screen.getByText(/Luxury Coach/i)).toBeInTheDocument();
  });

  test('submits search form and shows alert', () => {
    const { container } = render(<BusRentalPage />);

    fireEvent.change(screen.getByPlaceholderText(/From/i), { target: { value: 'Hyderabad' } });
    fireEvent.change(screen.getByPlaceholderText(/To/i), { target: { value: 'Goa' } });
    fireEvent.change(container.querySelector('input[name="date"]'), { target: { value: '2025-12-01' } });
    fireEvent.change(container.querySelector('input[name="passengers"]'), { target: { value: '4' } });

    fireEvent.submit(screen.getByRole('button', { name: /Search Buses/i }).closest('form'));

    expect(window.alert).toHaveBeenCalledWith(
      'Searching buses from Hyderabad to Goa on 2025-12-01'
    );
  });
});

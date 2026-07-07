import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from './Contact';

describe('ContactPage', () => {
  beforeEach(() => {
    jest.spyOn(window, 'open').mockImplementation(() => null);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    window.open.mockRestore();
    window.alert.mockRestore();
  });

  test('renders contact hero and form sections', () => {
    render(<ContactPage />);

    expect(screen.getAllByRole('heading', { level: 1 }).some(h => /Contact Us/i.test(h.textContent))).toBe(true);
    expect(screen.getByText(/We’re here to help!/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send via WhatsApp/i })).toBeInTheDocument();
  });

  test('opens WhatsApp URL when phone and message are provided', () => {
    render(<ContactPage />);

    fireEvent.change(screen.getByPlaceholderText(/Enter phone number/i), { target: { value: '9123456789' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your WhatsApp message/i), { target: { value: 'Hello' } });
    fireEvent.click(screen.getByRole('button', { name: /Send via WhatsApp/i }));

    expect(window.open).toHaveBeenCalled();
  });
});

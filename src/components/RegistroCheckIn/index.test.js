import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegistroCheckIn from '.';

describe('RegistroCheckIn', () => {
  test('renders check-in form with inputs and button', () => {
    const { getByLabelText, getByText } = render(<RegistroCheckIn />);

    expect(getByLabelText(/name/i)).toBeInTheDocument();
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/phone/i)).toBeInTheDocument();
    expect(getByText(/check in/i)).toBeInTheDocument();
  });

  test('submits form with user input values', () => {
    const mockOnSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<RegistroCheckIn onSubmit={mockOnSubmit} />);

    const nameInput = getByLabelText(/name/i);
    const emailInput = getByLabelText(/email/i);
    const phoneInput = getByLabelText(/phone/i);
    const submitButton = getByText(/check in/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    });
  });
});

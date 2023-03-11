import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RegistroCheckIn from './RegistroCheckIn';

describe('RegistroCheckIn', () => {
  test('submit button is disabled when fields are empty', () => {
    render(<RegistroCheckIn />);
    const submitButton = screen.getByRole('button', { name: /registrarse/i });
    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled when fields are filled', () => {
    render(<RegistroCheckIn />);
    const nombreInput = screen.getByLabelText(/nombre/i);
    const apellidoInput = screen.getByLabelText(/apellido/i);
    const fechaNacimientoInput = screen.getByLabelText(/fecha de nacimiento/i);
    const submitButton = screen.getByRole('button', { name: /registrarse/i });

    fireEvent.change(nombreInput, { target: { value: 'Juan' } });
    fireEvent.change(apellidoInput, { target: { value: 'Pérez' } });
    fireEvent.change(fechaNacimientoInput, { target: { value: '1990-01-01' } });

    expect(submitButton).toBeEnabled();
  });

  test('submit button shows an alert with the user data when clicked', () => {
    render(<RegistroCheckIn />);
    const nombreInput = screen.getByLabelText(/nombre/i);
    const apellidoInput = screen.getByLabelText(/apellido/i);
    const fechaNacimientoInput = screen.getByLabelText

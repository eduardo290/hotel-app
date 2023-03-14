import { render, screen, fireEvent } from '@testing-library/react';
import RegistroCheckIn from '../RegistroCheckIn';

describe('RegistroCheckIn', () => {
  it('renders the form correctly', () => {
    render(<RegistroCheckIn />);
    expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
    expect(screen.getByLabelText('Apellido:')).toBeInTheDocument();
    expect(screen.getByLabelText('Habitación:')).toBeInTheDocument();
    expect(screen.getByLabelText('Fecha de ingreso:')).toBeInTheDocument();
    expect(screen.getByLabelText('Fecha de fin:')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('submits the form with the correct data', () => {
    const handleSubmit = jest.fn();
    render(<RegistroCheckIn onSubmit={handleSubmit} />);

    const nombreInput = screen.getByLabelText('Nombre:');
    fireEvent.change(nombreInput, { target: { value: 'John' } });

    const apellidoInput = screen.getByLabelText('Apellido:');
    fireEvent.change(apellidoInput, { target: { value: 'Doe' } });

    const habitacionInput = screen.getByLabelText('Habitación:');
    fireEvent.change(habitacionInput, { target: { value: '101' } });

    const fechaIngresoInput = screen.getByLabelText('Fecha de ingreso:');
    fireEvent.change(fechaIngresoInput, { target: { value: '2023-03-15' } });

    const fechaFinInput = screen.getByLabelText('Fecha de fin:');
    fireEvent.change(fechaFinInput, { target: { value: '2023-03-20' } });

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      nombre: 'John',
      apellido: 'Doe',
      habitacion: '101',
      fechaIngreso: '2023-03-15',
      fechaFin: '2023-03-20',
    });
  });

});

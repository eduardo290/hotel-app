import React from 'react';
import { render, screen } from '@testing-library/react';
import TablaCheckIn from '../TablaCheckIn';

describe('TablaCheckIn', () => {
  const mockCheckIns = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      habitacion: '101',
      fechaIngreso: '2023-03-10',
      fechaFin: '2023-03-15',
    },
    {
      nombre: 'María',
      apellido: 'González',
      habitacion: '102',
      fechaIngreso: '2023-03-11',
      fechaFin: '2023-03-13',
    },
  ];

  it('renders the table with the check-ins data', () => {
    render(<TablaCheckIn checkIns={mockCheckIns} />);

    expect(screen.getByText('Juan')).toBeInTheDocument();
    expect(screen.getByText('Pérez')).toBeInTheDocument();
    expect(screen.getByText('101')).toBeInTheDocument();
    expect(screen.getByText('2023-03-10')).toBeInTheDocument();
    expect(screen.getByText('2023-03-15')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    expect(screen.getByText('María')).toBeInTheDocument();
    expect(screen.getByText('González')).toBeInTheDocument();
    expect(screen.getByText('102')).toBeInTheDocument();
    expect(screen.getByText('2023-03-11')).toBeInTheDocument();
    expect(screen.getByText('2023-03-13')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders the summary information', () => {
    render(<TablaCheckIn checkIns={mockCheckIns} />);

    expect(screen.getByText('Total de check-ins: 2')).toBeInTheDocument();
    expect(screen.getByText('Total de días: 7')).toBeInTheDocument();
    expect(screen.getByText('Promedio de días por check-in: 3.50')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import TablaCheckIn from './TablaCheckIn';

describe('TablaCheckIn', () => {
  const checkIns = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      habitacion: '101',
      fechaIngreso: '2022-02-15',
      fechaFin: '2022-02-20',
    },
    {
      nombre: 'María',
      apellido: 'González',
      habitacion: '102',
      fechaIngreso: '2022-02-18',
      fechaFin: '2022-02-23',
    },
  ];

  it('renders a table with check-in data', () => {
    render(<TablaCheckIn checkIns={checkIns} />);

    expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    expect(screen.getByText('101')).toBeInTheDocument();
    expect(screen.getByText('2022-02-15')).toBeInTheDocument();
    expect(screen.getByText('2022-02-20')).toBeInTheDocument();
    expect(screen.getByText('María González')).toBeInTheDocument();
    expect(screen.getByText('102')).toBeInTheDocument();
    expect(screen.getByText('2022-02-18')).toBeInTheDocument();
    expect(screen.getByText('2022-02-23

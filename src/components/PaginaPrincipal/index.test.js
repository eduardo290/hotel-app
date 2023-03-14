import React from 'react';
import { render } from '@testing-library/react';
import PaginaPrincipal from '../PaginaPrincipal';

test('renders page header', () => {
  const { getByText } = render(<PaginaPrincipal />);
  const headerElement = getByText(/Hotel React./i);
  expect(headerElement).toBeInTheDocument();
});

test('renders available rooms section', () => {
  const { getByText } = render(<PaginaPrincipal />);
  const availableRoomsHeader = getByText(/Habitaciones disponibles/i);
  expect(availableRoomsHeader).toBeInTheDocument();
});

test('renders facilities section', () => {
  const { getByText } = render(<PaginaPrincipal />);
  const facilitiesHeader = getByText(/Instalaciones/i);
  expect(facilitiesHeader).toBeInTheDocument();
});

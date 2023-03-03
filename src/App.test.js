import { render } from '@testing-library/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ListaHabitaciones from './components/ListaHabitaciones';
import Habitacion from './components/Habitacion';

describe('App', () => {
  test('renders ListaHabitaciones component on root path', () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <ListaHabitaciones />,
      },
      {
        path: '/detalle/:id',
        element: <Habitacion />,
      },
    ]);

    const { getByTestId } = render(
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    );

    expect(getByTestId('lista-habitaciones')).toBeInTheDocument();
  });
});
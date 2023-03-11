import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListaHabitaciones from './components/ListaHabitaciones'
import Habitacion from './components/Habitacion'
import RegistroCheckIn from './components/RegistroCheckIn'
import Layout from "./Layout"
import './App.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListaHabitaciones />,
    },
    {
      path: "/detalle/:id",
      element: <Habitacion />,
    },
    {
      path: "/checkIn",
      element: <RegistroCheckIn/>,
    }
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;

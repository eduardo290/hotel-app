import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PaginaPrincipal from './components/PaginaPrincipal'
import Habitacion from './components/Habitacion'
import RegistroCheckIn from './components/RegistroCheckIn'
import PaginaCheckIn from './components/PaginaCheckIn'
import RegistroConsumoHabitacion from './components/registroConsumoHabitacion/RegistroConsumoHabitacion'
import Comentarios from './components/Comentarios'
import Mapa from './components/Mapa'
import Layout from "./Layout"
import './App.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PaginaPrincipal />,
    },
    {
      path: "/detalle/:id",
      element: <Habitacion />,
    },
    {
      path: "/checkIn",
      element: <RegistroCheckIn />,
    },
    {
      path: "/PaginaCheckIn",
      element: <PaginaCheckIn/>,
    }
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;

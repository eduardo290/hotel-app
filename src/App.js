import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PaginaPrincipal from './components/PaginaPrincipal'
import Habitacion from './components/Habitacion'
import RegistroCheckIn from './components/RegistroCheckIn'
import PaginaCheckIn from './components/PaginaCheckIn'
<<<<<<< HEAD
import RegistroConsumoHabitacion from './components/registroConsumoHabitacion/RegistroConsumoHabitacion'
import Comentarios from './components/Comentarios'
import Mapa from './components/Mapa'
=======
import Contacto from './components/Contacto'

>>>>>>> 2d86e1f44cf30b44f3189c71fd84613bd76bbd55
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
    },
    {
      path: "/registroConsumoHabitacion",
      element: <RegistroConsumoHabitacion/>,
    },
    {
      path: "/Comentarios",
      element: <Comentarios/>,
    },
    {
      path: "/Mapa",
      element: <Mapa/>,
    }
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;

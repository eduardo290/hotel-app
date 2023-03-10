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
      /* Henry Loez Pardo - Eduardo Luis Cano Castro */

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PaginaPrincipal />,
    },
    {
      path: "/PaginaCheckIn",
      element: <PaginaCheckIn/>,
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

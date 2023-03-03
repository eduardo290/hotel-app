import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListaPropiedades from './components/ListaPropiedades'
import Propiedad from './components/Propiedad'
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <ListaPropiedades />,
    },
    {
      path: "/detalle/:id",
      element: <Propiedad />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

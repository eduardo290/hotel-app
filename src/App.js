import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListaPropiedades from './components/ListaPropiedades'
import Propiedad from './components/Propiedad'
import Layout from "./Layout"
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
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;

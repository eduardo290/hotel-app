import React, { useState, useEffect } from 'react';
import Logo from '../../assets/unir.png';
import Habitacion from '../Habitacion';
import CatFact from '../CatFact';
import './styles.css';


function PaginaPrincipal() {
  const [habitaciones, setHabitaciones] = useState([
    { tipo: "individual", precio: 100, reservado: false },
    { tipo: "doble", precio: 200, reservado: false },
    { tipo: "suite", precio: 300, reservado: false },
  ].map((habitacion) => ({
    ...habitacion,
    precio: habitacion.precio || Math.floor(Math.random() * 500) + 100,
  })));
  const [consumos, setConsumos] = useState([]);


  useEffect(() => {
    const savedHabitaciones = localStorage.getItem('habitaciones');
    if (savedHabitaciones) {
      setHabitaciones(JSON.parse(savedHabitaciones));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('habitaciones', JSON.stringify(habitaciones));
  }, [habitaciones]);


  return (
    <div className="container" data-testid="pagina-principal">
      <main>
        <section>
          <h2>Habitaciones disponibles</h2>
          <div className="habitaciones">
            {habitaciones.map((habitacion, index) => (
              <Habitacion key={index} tipo={habitacion.tipo} precio={habitacion.precio} consumo={consumos[index]} />
            ))}
          </div>
        </section>
        <section>
          <h2>Instalaciones</h2>
          <div className="instalaciones">
            <div>
              <h3>Piscina</h3>
              <p>Disfrute de nuestra piscina al aire libre rodeada de jardines</p>
            </div>
            <div>
              <h3>Gimnasio</h3>
              <p>Ponemos a su disposición un completo gimnasio equipado con máquinas de última generación</p>
            </div>
            <div>
              <h3>Restaurante</h3>
              <p>Pruebe la deliciosa comida de nuestro restaurante y disfrute de una experiencia gastronómica única</p>
            </div>
          </div>
        </section>

      </main>
      <footer>
        <img src={Logo} alt="Logo UNIR" />
        <p>© {new Date().getFullYear()} Hotel React. Todos los derechos reservados. </p>

        <div>
      <h3>Cat Facts (consumo api)  [Dato curioso sobre gato]</h3>
      <CatFact />
    </div>

</footer>
</div>
);
}
export default PaginaPrincipal;
           

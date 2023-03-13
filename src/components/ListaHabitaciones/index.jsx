import React, { useState, useEffect } from 'react';
import Logo from '../../assets/unir.png';
import Habitacion from '../Habitacion';
import './styles.css';
import ReactDOM from 'react-dom';

function PaginaPrincipal() {
  const [flag, setFlag] = useState(true);
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const savedHabitaciones = localStorage.getItem('habitaciones');
    if (savedHabitaciones) {
      setHabitaciones(JSON.parse(savedHabitaciones));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('habitaciones', JSON.stringify(habitaciones));
  }, [habitaciones]);

  function showMore() {
    const section3 = document.querySelector('#section3');
    const ul = document.createElement('ul');
    ul.className = 'listaDinamica';

    for (let i = 0; i < 6; i++) {
      const li = document.createElement('li');
      const habitacion = document.createElement('div');
      ReactDOM.render(<Habitacion key={i}>Habitación {i + 1}</Habitacion>, habitacion);
      li.appendChild(habitacion);
      ul.appendChild(li);
      setHabitaciones([...habitaciones, `Habitación ${i + 1}`]);
    }

    if (flag) {
      section3.appendChild(ul);
      setFlag(false);
    } else {
      section3.removeChild(section3.lastChild);
      setFlag(true);
    }
  }

  return (
    <div className="container" data-testid='pagina-principal'>
      <main>
        <section>
          <h2>Habitaciones disponibles</h2>
          <div className="habitaciones">
            <Habitacion tipo="individual" precio="50">
              <h3>Individual</h3>
              <p>Habitación individual con una cama individual</p>
              <ul>
                <li>Wifi gratuito</li>
                <li>TV de pantalla plana</li>
                <li>Aire acondicionado</li>
              </ul>
            </Habitacion>
            <Habitacion tipo="doble" precio="80">
              <h3>Doble</h3>
              <p>Habitación doble con dos camas individuales</p>
              <ul>
                <li>Wifi gratuito</li>
                <li>TV de pantalla plana</li>
                <li>Aire acondicionado</li>
              </ul>
            </Habitacion>
            <Habitacion tipo="triple" precio="110">
              <h3>Triple</h3>
              <p>Habitación triple con tres camas individuales</p>
              <ul>
                <li>Wifi gratuito</li>
                <li>TV de pantalla plana</li>
                <li>Aire acondicionado</li>
              </ul>
            </Habitacion>
            <Habitacion tipo="suite" precio="200">
              <h3>Suite</h3>
              <p>Habitación de lujo con una cama doble y una sala de estar</p>
              <ul>
                <li>Wifi gratuito</li>
                <li>TV de pantalla plana</li>
                <li>Aire acondicionado</li>
                <li>Vistas panorámicas</li>
                <li>Mini-bar</li>
              </ul>
            </Habitacion>
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
              <p>Deguste nuestros exquisitos platos elaborados con productos locales</p>
            </div>
          </div>
        </section>
        <section id="section3">
          <h2>Más habitaciones</h2>
          <button onClick={showMore}>Mostrar más habitaciones</button>
        </section>
      </main>
      <footer>
        <img src={Logo} alt="Logo UNIR" />
        <p>© 2022 Hotel React. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
export default PaginaPrincipal;


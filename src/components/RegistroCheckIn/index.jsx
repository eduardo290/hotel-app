import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RegistroCheckIn(props) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [habitacion, setHabitacion] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [checkIns, setCheckIns] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkInData = {
      nombre,
      apellido,
      habitacion,
      fechaIngreso,
      fechaFin
    };
    if (props.onSubmit) {
      props.onSubmit(checkInData);
    }
    setNombre('');
    setApellido('');
    setHabitacion('');
    setFechaIngreso('');
    setFechaFin('');
    setEnviado(true);
    setCheckIns([...checkIns, checkInData]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Apellido:
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </label>
        <label>
          Habitación:
          <input type="text" value={habitacion} onChange={(e) => setHabitacion(e.target.value)} />
        </label>
        <label>
          Fecha de ingreso:
          <input type="date" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} />
        </label>
        <label>
          Fecha de fin:
          <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
        </label>
        <button type="submit">Registrar Check-in</button>
      </form>
      {enviado ? (
        <p>Se ha confirmado el check-in para {nombre} {apellido} en la habitación {habitacion}.</p>
      ) : null}
      <ListaCheckIn checkIns={checkIns} />
    </div>
  );
}

RegistroCheckIn.propTypes = {
  onSubmit: PropTypes.func
};

function ListaCheckIn(props) {
  const { checkIns } = props;

  return (
    <div>
      <h2>Check-ins registrados:</h2>
      <ul className="lista-checkin">
        {checkIns.map((checkIn, index) => (
          <li key={index}>
            {checkIn.nombre} {checkIn.apellido} - Habitación {checkIn.habitacion}
            <br />
            Fecha de ingreso: {checkIn.fechaIngreso}
            <br />
            Fecha de fin: {checkIn.fechaFin}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegistroCheckIn;

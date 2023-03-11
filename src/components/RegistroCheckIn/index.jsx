import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RegistroCheckIn(props) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [habitacion, setHabitacion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkInData = {
      nombre,
      apellido,
      habitacion
    };
    if (props.onSubmit) {
      props.onSubmit(checkInData);
    }
    setNombre('');
    setApellido('');
    setHabitacion('');
  };

  return (
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
      <button type="submit">Registrar Check-in</button>
    </form>
  );
}

RegistroCheckIn.propTypes = {
  onSubmit: PropTypes.func
};

export default RegistroCheckIn;

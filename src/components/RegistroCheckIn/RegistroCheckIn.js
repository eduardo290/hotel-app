import React from 'react';
import './RegistroCheckIn.css';

function RegistroCheckIn() {
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [fechaNacimiento, setFechaNacimiento] = React.useState('');

  function handleNombreChange(event) {
    setNombre(event.target.value);
  }

  function handleApellidoChange(event) {
    setApellido(event.target.value);
  }

  function handleFechaNacimientoChange(event) {
    setFechaNacimiento(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`¡Bienvenido al hotel ${nombre} ${apellido}! Su fecha de nacimiento es ${fechaNacimiento}.`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registro de Check-In</h1>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" value={apellido} onChange={handleApellidoChange} />
      </label>
      <br />
      <label>
        Fecha de nacimiento:
        <input type="date" value={fechaNacimiento} onChange={handleFechaNacimientoChange} />
      </label>
      <br />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegistroCheckIn;

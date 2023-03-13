import React, { useState } from 'react';

function Habitacion({ nombre, capacidad, precio, reservado }) {
const [habitacionReservada, setHabitacionReservada] = useState(reservado);

const reservarHabitacion = () => {
setHabitacionReservada(true);
};

return (
<div>
<h3>{nombre}</h3>
<p>Capacidad: {capacidad}</p>
<p>Precio: {precio} USD por noche</p>
<p>Estado: {habitacionReservada ? 'Reservado' : 'Disponible'}</p>
{!habitacionReservada && (
<button onClick={reservarHabitacion}>Reservar habitación</button>
)}
</div>
);
}

export default Habitacion;
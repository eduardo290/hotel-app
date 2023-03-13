import React, { useState, useEffect } from "react";
import "./styles.css"
function Habitacion({ tipo, precio, children }) {
  const [reservado, setReservado] = useState(false);
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    const reservasGuardadas = JSON.parse(
      localStorage.getItem("reservas") || "[]"
    );
    const estaReservado = reservasGuardadas.some(
      (reserva) => reserva.tipo === tipo
    );
    setReservado(estaReservado);
  }, [tipo]);

  useEffect(() => {
    fetch('https://picsum.photos/200')
      .then(response => {
        setImagen(response.url);
      })
      .catch(error => {
        console.error('Error obteniendo la imagen', error);
      });
  }, []);

  function reservar() {
    const reservasGuardadas = JSON.parse(
      localStorage.getItem("reservas") || "[]"
    );
    reservasGuardadas.push({ tipo, precio });
    localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));
    setReservado(true);
  }

  return (
    <div className={`habitacion ${reservado ? "reservado" : ""}`}>
      {imagen && <img src={imagen} alt="habitación" />}
      {children}
      <button onClick={reservar} disabled={reservado}>
        {reservado ? "Reservado" : "Reservar por $" + precio}
      </button>
    </div>
  );
}

export default Habitacion;

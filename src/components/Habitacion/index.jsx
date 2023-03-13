import React, { useState, useEffect } from "react";

function Habitacion({ tipo, precio, children }) {
  const [reservado, setReservado] = useState(false);

  useEffect(() => {
    const reservasGuardadas = JSON.parse(
      localStorage.getItem("reservas") || "[]"
    );
    const estaReservado = reservasGuardadas.some(
      (reserva) => reserva.tipo === tipo
    );
    setReservado(estaReservado);
  }, [tipo]);

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
      {children}
      <button onClick={reservar} disabled={reservado}>
        {reservado ? "Reservado" : "Reservar por $"+precio}
      </button>
    </div>
  );
}

export default Habitacion;

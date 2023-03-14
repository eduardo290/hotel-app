import React, { useState, useEffect } from "react";
import RegistroConsumoHabitacion from '../registroConsumoHabitacion/RegistroConsumoHabitacion'

function Habitacion({ tipo, consumo }) {
  const [reservado, setReservado] = useState(false);

  useEffect(() => {
    const reservasGuardadas = JSON.parse(
      localStorage.getItem("reservas") || "[]"
    );
    const estaReservado = reservasGuardadas.some(
      (reserva) => reserva.tipo === tipo
    );
    setReservado(estaReservado);

    const consumosGuardados = JSON.parse(
      localStorage.getItem("consumos") || "{}"
    );
    const consumosHabitacion = consumosGuardados[tipo] || {
      minibar: 0,
      restaurante: 0,
      spa: 0,
    };
    setConsumos(consumosHabitacion);
  }, [tipo]);

  function reservar() {
    const reservasGuardadas = JSON.parse(
      localStorage.getItem("reservas") || "[]"
    );
    reservasGuardadas.push({ tipo, precio });
    localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));
    setReservado(true);
  }

  function registrarConsumos(nuevosConsumos) {
    const consumosGuardados = JSON.parse(
      localStorage.getItem("consumos") || "{}"
    );
    const nuevosConsumosHabitacion = {
      ...consumosGuardados[tipo],
      ...nuevosConsumos,
    };
    consumosGuardados[tipo] = nuevosConsumosHabitacion;
    localStorage.setItem("consumos", JSON.stringify(consumosGuardados));
    setConsumos(nuevosConsumosHabitacion);
  }

  return (
    <div className={`habitacion ${reservado ? "reservado" : ""}`}>
      {children}
      <button onClick={reservar} disabled={reservado}>
        {reservado ? "Reservado" : "Reservar por $"+precio}
      </button>
      <RegistroConsumoHabitacion
        numero={tipo}
        consumos={consumos}
        onRegistrarConsumos={registrarConsumos}
         actualizarConsumos={actualizarConsumos} 

      />
    </div>
  );
}

export default Habitacion;

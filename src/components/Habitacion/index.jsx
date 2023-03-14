import React, { useState, useEffect } from "react";
import RegistroConsumoHabitacion from '../registroConsumoHabitacion/RegistroConsumoHabitacion'

function Habitacion({ tipo, consumo }) {
  const [reservado, setReservado] = useState(false);
  const [consumos, setConsumos] = useState({
    minibar: 0,
    restaurante: 0,
    spa: 0,
  });

  const precios = {
    individual: 100,
    doble: 150,
    suite: 300
  };
  const precio = precios[tipo]; // Get the standard price for this room type

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
  const actualizarConsumos = (nuevosConsumos) => {
    setConsumos((prevConsumos) => {
      const nuevosConsumosHabitacion = { 
        minibar: (prevConsumos.minibar || 0) + (nuevosConsumos.minibar || 0), 
        restaurante: (prevConsumos.restaurante || 0) + (nuevosConsumos.restaurante || 0), 
        spa: (prevConsumos.spa || 0) + (nuevosConsumos.spa || 0) 
      };
      const nuevosConsumosTotales = { ...prevConsumos, ...nuevosConsumosHabitacion };
      localStorage.setItem("consumos", JSON.stringify(nuevosConsumosTotales));
      return nuevosConsumosTotales;
    });
  };
  
  
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
      <p>Tipo de habitación: {tipo}</p>
      <p>Precio por noche: ${precio}</p>
      <p>Consumo actual:</p>
      <ul>
        <li>Minibar: ${consumos.minibar.toFixed(2)}</li>
        <li>Restaurante: ${consumos.restaurante.toFixed(2)}</li>
        <li>Spa: ${consumos.spa.toFixed(2)}</li>
      </ul>
      <button onClick={reservar} disabled={reservado}>
        {reservado ? "Reservado" : `Reservar por $${precios[tipo]}`}
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

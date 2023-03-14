import React, { useState, useEffect } from "react";
import "./registroConsumoHabitacion.css";

function RegistroConsumoHabitacion(props) {
  const [consumo, setConsumo] = useState({
    minibar: 0,
    restaurante: 0,
    spa: 0,
  });

  useEffect(() => {
    const consumosGuardados = JSON.parse(
      localStorage.getItem("consumos") || "{}"
    );
    const habitacionConsumos = consumosGuardados[props.numero] || {
      minibar: 0,
      restaurante: 0,
      spa: 0,
    };
    setConsumo(habitacionConsumos);
  }, [props.numero]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setConsumo((prevConsumo) => ({
      ...prevConsumo,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const consumosGuardados = JSON.parse(
      localStorage.getItem("consumos") || "{}"
    );
    const habitacionConsumos = consumosGuardados[props.numero] || {
      minibar: 0,
      restaurante: 0,
      spa: 0,
    };
    const nuevosConsumos = {
      minibar: habitacionConsumos.minibar + consumo.minibar,
      restaurante: habitacionConsumos.restaurante + consumo.restaurante,
      spa: habitacionConsumos.spa + consumo.spa,
    };
    consumosGuardados[props.numero] = nuevosConsumos;
    localStorage.setItem("consumos", JSON.stringify(consumosGuardados));
    props.actualizarConsumos(props.numero, nuevosConsumos);
    setConsumo({
      minibar: 0,
      restaurante: 0,
      spa: 0,
    });
  };


  return (
    <div className="registroConsumoHabitacion">
      <h2>Habitación {props.numero}</h2>
      <p>Consumo actual:</p>
      <ul>
        <li>Minibar: ${consumo.minibar.toFixed(2)}</li>
        <li>Restaurante: ${consumo.restaurante.toFixed(2)}</li>
        <li>Spa: ${consumo.spa.toFixed(2)}</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor={`minibar-${props.numero}`}>Minibar:</label>
        <input
          type="number"
          id={`minibar-${props.numero}`}
          name="minibar"
          value={consumo.minibar}
          onChange={handleChange}
        />
        <label htmlFor={`restaurante-${props.numero}`}>Restaurante:</label>
        <input
          type="number"
          id={`restaurante-${props.numero}`}
          name="restaurante"
          value={consumo.restaurante}
          onChange={handleChange}
        />
        <label htmlFor={`spa-${props.numero}`}>Spa:</label>
        <input
          type="number"
          id={`spa-${props.numero}`}
          name="spa"
          value={consumo.spa}
          onChange={handleChange}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroConsumoHabitacion;

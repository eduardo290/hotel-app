import React, { useState } from "react";
import "./Comentarios.css";

function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState({
    remitente: "",
    contenido: "",
    puntuacion: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevoComentario((prevComentario) => ({
      ...prevComentario,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fechaActual = new Date().toLocaleDateString("es-ES");
    const nuevoComentarioConFecha = {
      ...nuevoComentario,
      fecha: fechaActual,
    };
    setComentarios([...comentarios, nuevoComentarioConFecha]);
    setNuevoComentario({
      remitente: "",
      contenido: "",
      puntuacion: "",
    });
  };

  const renderPuntuacionOptions = () => {
    const options = [];
    for (let i = 1; i <= 5; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <div className="comentarios" id = "comentarios">
      <h2>Comentarios</h2>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>
            <p>{comentario.contenido}</p>
            <p>
              Remitente: {comentario.remitente} | Puntuación: {comentario.puntuacion} | Fecha: {comentario.fecha}
            </p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="remitente">Nombre:</label>
        <input
          type="text"
          id="remitente"
          name="remitente"
          value={nuevoComentario.remitente}
          onChange={handleChange}
        />
        <label htmlFor="contenido">Comentario:</label>
        <textarea
          id="contenido"
          name="contenido"
          value={nuevoComentario.contenido}
          onChange={handleChange}
        />
        <label htmlFor="puntuacion">Puntuación:</label>
        <select
          id="puntuacion"
          name="puntuacion"
          value={nuevoComentario.puntuacion}
          onChange={handleChange}
        >
          <option value="">-- Seleccione una opción --</option>
          {renderPuntuacionOptions()}
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Comentarios;

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function TablaCheckIn(props) {
  const { checkIns } = props;

  // Función para calcular la cantidad de días entre dos fechas
  const calcularDias = (fechaInicio, fechaFin) => {
    const fecha1 = new Date(fechaInicio);
    const fecha2 = new Date(fechaFin);
    const diferencia = fecha2.getTime() - fecha1.getTime();
    const dias = Math.round(diferencia / (1000 * 60 * 60 * 24));
    return dias;
  };

  // Calculamos el total de check-ins
  const totalCheckIns = checkIns.length;

  // Calculamos la cantidad de días totales entre todos los check-ins
  let totalDias = 0;
  checkIns.forEach((checkIn) => {
    const dias = calcularDias(checkIn.fechaIngreso, checkIn.fechaFin);
    totalDias += dias;
  });

  // Calculamos la cantidad de días promedio por check-in
  const promedioDias = totalCheckIns > 0 ? totalDias / totalCheckIns : 0;

  return (
    <div>
      <table className="tabla-checkin">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Habitación</th>
            <th>Fecha de ingreso</th>
            <th>Fecha de fin</th>
            <th>Días</th>
          </tr>
        </thead>
        <tbody>
          {checkIns.map((checkIn, index) => {
            const dias = calcularDias(checkIn.fechaIngreso, checkIn.fechaFin);
            return (
              <tr key={index}>
                <td>{checkIn.nombre}</td>
                <td>{checkIn.apellido}</td>
                <td>{checkIn.habitacion}</td>
                <td>{checkIn.fechaIngreso}</td>
                <td>{checkIn.fechaFin}</td>
                <td>{dias}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="resumen-checkin">
        <p>Total de check-ins: {totalCheckIns}</p>
        <p>Total de días: {totalDias}</p>
        <p>Promedio de días por check-in: {promedioDias.toFixed(2)}</p>
      </div>
    </div>
  );
}

TablaCheckIn.propTypes = {
  checkIns: PropTypes.array.isRequired
};

export default TablaCheckIn;

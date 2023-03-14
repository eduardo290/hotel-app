import React, { useState } from "react";
import "./Mapa.css";
import Logo from '../../assets/map.png';

function Mapa() {
  const [posicion, setPosicion] = useState([51.505, -0.09]);

  const reviews = [
    {
      id: 1,
      user: "Juan Pérez",
      text: "Excelente ubicación, cerca de la playa y del centro de la ciudad.",
    },
    {
      id: 2,
      user: "María Rodríguez",
      text: "El hotel está en una zona muy bonita y tranquila, ideal para descansar.",
    },
    {
      id: 3,
      user: "Carlos Gutiérrez",
      text: "El parqueadero es un poco pequeño pero el personal es muy amable.",
    },
  ];

  const handleClick = (event) => {
    setPosicion([event.latlng.lat, event.latlng.lng]);
  };

  return (
    <div className="mapa">
      <div className="info-container">
        <h2 className="titulo">¿Cómo llegar?</h2>
        <p className="descripcion">
          Estamos ubicados en un sector privilegiado de la ciudad, en la zona
          hotelera de la playa. Si vienes en auto, puedes encontrar nuestro
          parqueadero en la calle lateral, detrás del hotel. Si prefieres tomar un
          taxi, puedes decirle al conductor que te lleve al Hotel Playa Azul.
        </p>
        <h2 className="titulo">Reviews de la ubicación</h2>
        <ul className="reviews-list">
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.user}:</strong> {review.text}
            </li>
          ))}
        </ul>
        <img src={Logo} alt="Logo UNIR" />

      </div>
      </div>

  );
}

export default Mapa;

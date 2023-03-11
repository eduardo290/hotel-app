import React, { useState } from 'react';
import './style.css';

function RegistroCheckIn(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ name, email, phone });
  };

  return (
    <div className="registro-checkin-container">
      <h2>Registro Check In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          className="form-input"
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          className="form-input"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          className="form-input"
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
        <button className="form-submit" type="submit">
          Check In
        </button>
      </form>
    </div>
  );
}

export default RegistroCheckIn;

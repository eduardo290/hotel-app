import React, { useState } from 'react';
import './styles.css';

function FormularioContacto() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNombre('');
        setApellido('');
        setTelefono('');
        setMensaje('');
        setEnviado(true);

        setTimeout(() => {
            setEnviado(false);
        }, 2000);
    };

    return (
        <main>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} /><br />

                    <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} /><br />

                    <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} /><br />

                    <textarea name="Mensaje" cols="30" rows="10" placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea><br />

                    <button type="submit" disabled={!(nombre && apellido && mensaje && telefono)}>Enviar</button>
                </form>

                {enviado && <p>Mensaje enviado con éxito</p>}
            </div>
        </main>
    );
}

export default FormularioContacto;
import React, { useState } from 'react';
import Logo from '../../assets/unir.png';
import './styles.css';

function PaginaPrincipal() {
    const [flag, setFlag] = useState(true);

    function cambiarColor() {
        document.body.style.backgroundColor = 'rgb(255, 196, 0)';
    }

    function cambiarTamanio() {
        document.body.style.fontSize = '24px';
    }

    function resetStyles() {
        document.body.style.fontSize = '16px';
        document.body.style.backgroundColor = 'rgb(255, 255, 255)';
    }

    function showMore() {
        const section3 = document.querySelector('#section3');
        const lista = document.createElement('ul');
        lista.className = 'listaDinamica';

        for (let i = 0; i < 3; i++) {
            const elemento = document.createElement('li');
            elemento.innerHTML = 'Elemento ' + i;
            lista.appendChild(elemento);
        }

        if (flag) {
            section3.appendChild(lista);
            setFlag(false);
        } else {
            section3.childNodes[section3.childNodes.length - 1].remove();
            setFlag(true);
        }
    }

    return (
        <div className="container">
            <header>
                <h1>Encabezado principal</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Acerca de</a>
                        </li>
                        <li>
                            <a href="/contacto.html">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                    <h2>Sección 1</h2>
                    <p>Este es un párrafo de la sección 1.</p>
                    <ul>
                        <li>Elemento de lista 1</li>
                        <li>Elemento de lista 2</li>
                        <li>Elemento de lista 3</li>
                    </ul>
                </section>
                <section>
                    <h2>Sección 2</h2>
                    <p>Este es un párrafo de la sección 2.</p>
                    <ol>
                        <li>Elemento de lista 1</li>
                        <li>Elemento de lista 2</li>
                        <li>Elemento de lista 3</li>
                    </ol>
                    <blockquote>
                        <p>Este es un bloque de cita.</p>
                    </blockquote>
                </section>
                <section id="section3">
                    <h2>Sección 3</h2>
                    <p>Este es un párrafo de la sección 3</p>
                    <button id="btnMas" onClick={showMore}>
                        {flag ? 'Mostrar más' : 'Mostrar menos'}
                    </button>
                </section>
            </main>
            <aside>
                <img src={Logo} />
                <h2>Barra lateral</h2>
                <ul>
                    <li>
                        <a href="#">Enlace 1</a>
                    </li>
                    <li>
                        <a href="#">Enlace 2</a>
                    </li>
                    <li>
                        <a href="#">Enlace 3</a>
                    </li>
                </ul>
                <div className="botones">
                    <button className="boton" id="cambiarColor" onClick={cambiarColor}>
                        Cambiar color de fondo
                    </button>
                    <button className="boton" id="cambiarTamanio" onClick={cambiarTamanio}>
                        Cambiar tamaño de letra
                    </button>
                    <button className="boton" id="resetStyles" onClick={resetStyles}>
                        Resetear Estilos
                    </button>
                </div>
            </aside>
            <footer>
                <p>Derechos de autor © 2023 - Mi página web</p>
            </footer>
        </div>
    )
}

export default PaginaPrincipal
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaginaPrincipal from './index';

test('Renderiza el componente', () => {
    const { getByText } = render(<PaginaPrincipal />);
    expect(getByText('Encabezado principal')).toBeInTheDocument();
});

test('Muestra y oculta la lista dinámica', () => {
    const { getByTestId, getByText } = render(<PaginaPrincipal />);
    const btnMas = getByTestId('btn-mas');

    fireEvent.click(btnMas);
    expect(getByText('Elemento 0')).toBeInTheDocument();

    fireEvent.click(btnMas);
    expect(() => getByText('Elemento 0')).toThrowError();
});

test('Cambia el color de fondo al hacer clic en el botón', () => {
    const { getByText } = render(<PaginaPrincipal />);
    const btnColor = getByText('Cambiar color de fondo');

    fireEvent.click(btnColor);
    expect(document.body.style.backgroundColor).toBe('rgb(255, 196, 0)');
});

test('Cambia el tamaño de la letra al hacer clic en el botón', () => {
    const { getByText } = render(<PaginaPrincipal />);
    const btnTamanio = getByText('Cambiar tamaño de letra');

    fireEvent.click(btnTamanio);
    expect(document.body.style.fontSize).toBe('24px');
});

test('Resetea los estilos al hacer clic en el botón', () => {
    document.body.style.backgroundColor = 'rgb(255, 196, 0)';
    document.body.style.fontSize = '24px';

    const { getByText } = render(<PaginaPrincipal />);
    const btnReset = getByText('Resetear Estilos');

    fireEvent.click(btnReset);
    expect(document.body.style.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(document.body.style.fontSize).toBe('16px');
});

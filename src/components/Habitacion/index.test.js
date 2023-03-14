import React from "react";
import { render, screen } from "@testing-library/react";
import Habitacion from "../Habitacion";

describe("Habitacion", () => {
  test("renders Habitacion component", () => {
    render(<Habitacion tipo="individual" consumo={{}} />);
    const tipoElement = screen.getByText("Tipo de habitación: individual");
    expect(tipoElement).toBeInTheDocument();

    const precioElement = screen.getByText("Precio por noche: $100");
    expect(precioElement).toBeInTheDocument();
  });
});

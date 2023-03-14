import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Habitacion from "../Habitacion";

describe("Habitacion", () => {


  it("permite reservar una habitación", () => {
    const { getByText } = render(<Habitacion tipo="individual" />);
    expect(getByText("Reservado")).toBeInTheDocument();
  });

});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Comentarios from "../Comentarios";

describe("Comentarios", () => {
  it("debe actualizar correctamente el estado del comentario", () => {
    const { getByLabelText } = render(<Comentarios />);
    const remitenteInput = getByLabelText(/nombre/i);
    const contenidoInput = getByLabelText(/comentario/i);
    const puntuacionInput = getByLabelText(/puntuación/i);

    fireEvent.change(remitenteInput, { target: { value: "Juan" } });
    expect(remitenteInput.value).toBe("Juan");

    fireEvent.change(contenidoInput, { target: { value: "¡Me encantó el producto!" } });
    expect(contenidoInput.value).toBe("¡Me encantó el producto!");

    fireEvent.change(puntuacionInput, { target: { value: "5" } });
    expect(puntuacionInput.value).toBe("5");
  });
});

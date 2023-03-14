import { render, fireEvent } from "@testing-library/react";
import RegistroConsumoHabitacion from "./RegistroConsumoHabitacion";

describe("RegistroConsumoHabitacion", () => {
  it("should update consumption when form is submitted", () => {
    // Create a mock function to pass as a prop to the component
    const actualizarConsumos = jest.fn();

    // Render the component and get the form elements
    const { getByLabelText, getByRole } = render(
      <RegistroConsumoHabitacion
        numero={1}
        actualizarConsumos={actualizarConsumos}
      />
    );
    const minibarInput = getByLabelText("Minibar:");
    const restauranteInput = getByLabelText("Restaurante:");
    const spaInput = getByLabelText("Spa:");
    const submitButton = getByRole("button", { name: "Registrar" });

    // Simulate a user entering consumption data and submitting the form
    fireEvent.change(minibarInput, { target: { value: "10" } });
    fireEvent.change(restauranteInput, { target: { value: "20" } });
    fireEvent.change(spaInput, { target: { value: "30" } });
    fireEvent.click(submitButton);

    // Check that the consumption data was updated
    expect(actualizarConsumos).toHaveBeenCalledWith(1, {
      minibar: 10,
      restaurante: 20,
      spa: 30,
    });
  });
});

import { render, screen } from "@testing-library/react";
import Features from "../../components/item-container/features/features";
import type { Attributes } from "../../types/product";

jest.mock("../../components/item-container/features/features.css", () => ({}));

describe("Features", () => {
  it("renderiza solo las características conocidas", () => {
    const mockAttributes: Attributes[] = [
      {
        id: "any",
        name: "Marca",
        value_id: null,
        value_name: "Samsung",
        value_struct: {
          number: 99,
          unit: "años",
        },
        values: [
          {
            id: null,
            name: "99 años",
            struct: {
              number: 99,
              unit: "años",
            },
          },
        ],
        attribute_group_id: "OTHERS",
        attribute_group_name: "Otros",
      },
      {
        id: "PRODUCT_TYPE",
        name: "Pantalla",
        value_id: null,
        value_name: "6.5 pulgadas",
        value_struct: {},
        values: [
          {
            id: null,
            name: "celular",
            struct: null,
          },
        ],
        attribute_group_id: "",
        attribute_group_name: "",
      },
      {
        id: "PRODUCT_TYPE",
        name: "Desconocido",
        value_id: null,
        value_name: "X",
        value_struct: {},
        values: [
          {
            id: null,
            name: "celular",
            struct: null,
          },
        ],
        attribute_group_id: "",
        attribute_group_name: "",
      },
    ];

    render(<Features attributes={mockAttributes} />);

    expect(
      screen.getByText("Características del Producto")
    ).toBeInTheDocument();
    expect(screen.getByText("Marca:")).toBeInTheDocument();
    expect(screen.getByText("Samsung")).toBeInTheDocument();
    expect(screen.getByText("Pantalla:")).toBeInTheDocument();
    expect(screen.getByText("6.5 pulgadas")).toBeInTheDocument();
    expect(screen.queryByText("Desconocido:")).not.toBeInTheDocument();
  });
});

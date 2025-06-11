import { render, screen } from "@testing-library/react";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";

jest.mock("../../components/breadcrumbs/breadcrumbs.css", () => ({}));

describe("Breadcrumbs", () => {
  const props = {
    recomendations: "Celulares baratos",
    category: "Electrónica",
    subcategories: ["Celulares", "Smartphones"],
  };

  test("renders recommendations text", () => {
    render(<Breadcrumbs {...props} />);
    expect(screen.getByText(/también puede interesarte/i)).toBeInTheDocument();
    expect(screen.getByText(props.recomendations)).toBeInTheDocument();
  });

  test("renders category and subcategories", () => {
    render(<Breadcrumbs {...props} />);
    expect(screen.getByText(props.category)).toBeInTheDocument();
    props.subcategories.forEach((subcategory) => {
      expect(screen.getByText(subcategory)).toBeInTheDocument();
    });
  });

  test("renders share and sell options", () => {
    render(<Breadcrumbs {...props} />);
    expect(screen.getByText(/vender uno igual/i)).toBeInTheDocument();
    expect(screen.getByText(/compartir/i)).toBeInTheDocument();
  });

  test("renders 'Volver' text", () => {
    render(<Breadcrumbs {...props} />);
    expect(screen.getByText(/volver/i)).toBeInTheDocument();
  });
});

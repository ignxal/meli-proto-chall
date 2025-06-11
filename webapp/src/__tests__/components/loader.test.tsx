import { render } from "@testing-library/react";
import Loader from "../../components/loader/loader";

jest.mock("../../components/loader/loader.css", () => ({}));

describe("Loader component", () => {
  it("muestra el spinner", () => {
    const { container } = render(<Loader />);
    expect(container.querySelector(".loader-overlay")).toBeInTheDocument();
    expect(container.querySelector(".spinner")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { useEffect } from "react";
import useWindowWidth from "../../hooks/use-window-width";
import { act } from "react-dom/test-utils";

const TestComponent = () => {
  const width = useWindowWidth();

  useEffect(() => {}, [width]);

  return <div data-testid="width">{width}</div>;
};

describe("useWindowWidth", () => {
  it("should return the initial window width and update on resize", () => {
    window.innerWidth = 1024;

    render(<TestComponent />);
    expect(screen.getByTestId("width").textContent).toBe("1024");

    act(() => {
      window.innerWidth = 768;
      window.dispatchEvent(new Event("resize"));
    });

    expect(screen.getByTestId("width").textContent).toBe("768");
  });
});

import { render, screen, waitFor } from "@testing-library/react";
import ItemPage from "../../pages/item-page";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import * as api from "../../services/api";
import "@testing-library/jest-dom";
import type { Product, Review, QA } from "../../types/product";

jest.mock("../../components/breadcrumbs/breadcrumbs", () => () => (
  <div data-testid="breadcrumbs" />
));
jest.mock("../../components/item-container/item-container", () => () => (
  <div data-testid="item-container" />
));
jest.mock(
  "../../components/error/message",
  () =>
    ({ type }: { type: string }) =>
      <div>Error {type}</div>
);
jest.mock("../../components/loader/loader", () => () => <div>Loading...</div>);

describe("ItemPage", () => {
  const mockProduct: Product = {
    id: "activeProduct123",
    site_id: "MLA",
    title: "Samsung Galaxy S21",
    seller_id: 456,
    category_id: "MCO5678",
    price: 120000,
    base_price: 200,
    original_price: 200,
    currency_id: "ARS",
    initial_quantity: 5,
    available_quantity: 5,
    sold_quantity: 100,
    brief_details: ["Pantalla AMOLED", "Procesador Exynos"],
    sale_terms: [],
    buying_mode: "buy_it_now",
    listing_type_id: "gold_special",
    start_time: "2023-01-01T00:00:00.000Z",
    stop_time: "2023-01-01T00:00:00.000Z",
    condition: "new",
    permalink: "http://example.com/active",
    pictures: [],
    description: "This is an active test product.",
    accepts_mercadopago: true,
    tags: [],
    shipping: {},
    status: "active",
    date_created: "2023-01-01T00:00:00.000Z",
    last_updated: "2023-01-01T00:00:00.000Z",
    category: "Home",
    subcategories: [],
    recommendations: "",
    attributes: [],
    colors: [
      {
        id: "616691-MLA27900381255_082018",
        name: "Azul oscuro",
        productId: "MLA83796059239",
        url: "https://http2.mlstatic.com/D_NQ_NP_2X_930126-MLA83796059239_042025-F.jpg",
        secure_url:
          "https://http2.mlstatic.com/D_NQ_NP_2X_930126-MLA83796059239_042025-F.jpg",
        size: "500x500",
        max_size: "400x800",
        quality: "",
        selected: true,
      },
      {
        id: "918230-MLA31424182281_072019",
        name: "Verde",
        productId: "MLA83796059239",
        url: "https://http2.mlstatic.com/D_NQ_NP_2X_906308-MLA85051996026_052025-F.jpg",
        secure_url:
          "https://http2.mlstatic.com/D_NQ_NP_2X_906308-MLA85051996026_052025-F.jpg",
        size: "281x500",
        max_size: "200x1920",
        quality: "",
        selected: false,
      },
    ],
  };
  const mockQAs: QA[] = [
    {
      question: "¿Tiene garantía?",
      answer: "Sí",
      date: "2024-05-01",
      id: 1,
      userId: 1,
      productId: "MLA83796059239",
    },
  ];
  const mockReviews: Review[] = [
    {
      id: 1,
      productId: "MLA1",
      userId: 1,
      title: "Excelente producto",
      comments: "Excelente producto",
      rating: 5,
      likes: 0,
      dislikes: 0,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithRouter = (id = "123") => {
    render(
      <MemoryRouter initialEntries={[`/items/${id}`]}>
        <Routes>
          <Route path="/items/:id" element={<ItemPage />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("muestra loader inicialmente", async () => {
    jest.spyOn(api, "fetchProduct").mockResolvedValue(mockProduct);
    jest.spyOn(api, "fetchProductQAs").mockResolvedValue(mockQAs);
    jest.spyOn(api, "fetchProductReviews").mockResolvedValue(mockReviews);

    renderWithRouter();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );
  });

  it("muestra componente de error 404 si producto no se encuentra", async () => {
    jest
      .spyOn(api, "fetchProduct")
      .mockRejectedValue(new Error("Producto no encontrado"));

    renderWithRouter();
    await waitFor(() =>
      expect(screen.getByText("Error 404")).toBeInTheDocument()
    );
  });

  it("muestra componente de error 500 si falla la conexión", async () => {
    jest
      .spyOn(api, "fetchProduct")
      .mockRejectedValue(new Error("Timeout error"));

    renderWithRouter();
    await waitFor(() =>
      expect(screen.getByText("Error 500")).toBeInTheDocument()
    );
  });

  it("renderiza correctamente cuando todo está bien", async () => {
    jest.spyOn(api, "fetchProduct").mockResolvedValue(mockProduct);
    jest.spyOn(api, "fetchProductQAs").mockResolvedValue(mockQAs);
    jest.spyOn(api, "fetchProductReviews").mockResolvedValue(mockReviews);

    renderWithRouter();
    await waitFor(() => {
      expect(screen.getByTestId("breadcrumbs")).toBeInTheDocument();
      expect(screen.getByTestId("item-container")).toBeInTheDocument();
    });
  });
});

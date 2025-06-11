import { render, screen } from "@testing-library/react";
import ProductDelivery from "../../components/item-container/delivery/delivery";
import type { Product } from "../../types/product";

jest.mock("../../components/item-container/delivery/delivery.css", () => ({}));
jest.mock("../../assets/img/samsung.jpg", () => "mocked-logo.png");

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

describe("ProductDelivery", () => {
  it("muestra envío gratis y stock disponible", () => {
    render(<ProductDelivery product={mockProduct} />);
    expect(screen.getByText("Envío gratis")).toBeInTheDocument();
    expect(screen.getByText("Stock disponible")).toBeInTheDocument();
  });

  it("desactiva botones si no hay stock", () => {
    render(
      <ProductDelivery product={{ ...mockProduct, available_quantity: 0 }} />
    );
    screen.getAllByRole("button").forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });
});

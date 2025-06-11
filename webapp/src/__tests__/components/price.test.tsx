import { render, screen, fireEvent } from "@testing-library/react";
import ProductPrice from "../../components/item-container/price/price";
import type { Product, Review } from "../../types/product";

jest.mock("../../components/item-container/price/price.css", () => ({}));
jest.mock("../../assets/img/samsung.jpg", () => "mocked-samsung.jpg");

describe("ProductPrice", () => {
  const product: Product = {
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

  const reviews: Review[] = [
    {
      id: 1,
      productId: "MLA123",
      userId: 1,
      title: "Great product",
      comments: "Loved it!",
      rating: 4,
      likes: 10,
      dislikes: 0,
    },
    {
      id: 1,
      productId: "MLA123",
      userId: 1,
      title: "Great product",
      comments: "Loved it!",
      rating: 5,
      likes: 10,
      dislikes: 0,
    },
  ];

  it("renderiza correctamente el precio, título y calificaciones", () => {
    render(<ProductPrice key={123} product={product} reviews={reviews} />);

    expect(screen.getByText("Samsung Galaxy S21")).toBeInTheDocument();
    expect(screen.getByText(/\$ 120.000/)).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("(2)")).toBeInTheDocument();
  });

  it("muestra los detalles breves del producto", () => {
    render(<ProductPrice product={product} reviews={reviews} />);
    expect(screen.getByText("Pantalla AMOLED")).toBeInTheDocument();
    expect(screen.getByText("Procesador Exynos")).toBeInTheDocument();
  });

  it("cambia el color seleccionado al hacer clic", () => {
    render(<ProductPrice product={product} reviews={reviews} />);

    const blanco = screen.getByAltText("Verde");
    fireEvent.click(blanco);

    expect(screen.getByText("Verde")).toBeInTheDocument();
  });

  it("al hacer clic en el icono de favorito cambia el estado", () => {
    render(<ProductPrice product={product} reviews={reviews} />);

    const favIcon = screen.getByAltText("Samsung");
    fireEvent.click(favIcon);
  });
});

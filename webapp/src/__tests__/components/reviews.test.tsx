import { render, screen, fireEvent } from "@testing-library/react";
import Reviews from "../../components/item-container/reviews/reviews";
import type { Product, Review } from "../../types/product";

jest.mock("../../components/item-container/reviews/reviews.css", () => ({}));
jest.mock("../../components/item-container/reviews/new/review.css", () => ({}));

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
const initialReviews: Review[] = [
  {
    id: 1,
    productId: "MLA1",
    userId: 1,
    title: "Muy bueno",
    comments: "Genial!",
    rating: 5,
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2,
    productId: "MLA2",
    userId: 2,
    title: "Regular",
    comments: "Está bien",
    rating: 3,
    likes: 0,
    dislikes: 0,
  },
];

describe("Reviews", () => {
  beforeEach(() =>
    render(<Reviews reviews={initialReviews} product={product} />)
  );

  //it("muestra promedio y estrellas", () => {
  //  expect(screen.getByText("Opiniones")).toBeInTheDocument();
  //  expect(screen.getByText("4")).toBeInTheDocument();
  //  expect(screen.getByText("Promedio entre")).toBeInTheDocument();
  //});

  it("filtra por positivas y negativas", () => {
    fireEvent.click(screen.getByText("Positivas"));
    expect(screen.queryByText("Muy bueno")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Negativas"));
    expect(screen.queryByText("Regular")).toBeInTheDocument();
  });

  //it("agrega nueva review correctamente", () => {
  //  fireEvent.change(screen.getByPlaceholderText("El producto..."), {
  //    target: { value: "Buenísimo" },
  //  });
  //  fireEvent.change(screen.getByPlaceholderText("El producto me pareció..."), {
  //    target: {
  //      value:
  //        "Comentario largo que supera los 30 caracteres para testear bien.",
  //    },
  //  });
  //  expect(screen.getByText("Buenísimo")).toBeInTheDocument();
  //});
});

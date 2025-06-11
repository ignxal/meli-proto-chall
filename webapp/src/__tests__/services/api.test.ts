import {
  fetchProduct,
  fetchProductQAs,
  fetchProductReviews,
} from "../../services/api";

global.fetch = jest.fn();

describe("API utils", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetchProduct lanza error si la respuesta es mala", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ error: "Error del servidor" }),
    });

    await expect(fetchProduct("1")).rejects.toThrow("Error del servidor");
  });

  it("fetchProduct retorna datos válidos", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ id: "1", name: "Producto test" }),
    });

    const result = await fetchProduct("1");
    expect(result).toEqual({ id: "1", name: "Producto test" });
  });

  it("fetchProductQAs retorna QAs", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [{ id: "qa1" }, { id: "qa2" }],
    });

    const qas = await fetchProductQAs("1");
    expect(qas).toHaveLength(2);
  });

  it("fetchProductReviews retorna reviews", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [{ id: "r1" }, { id: "r2" }],
    });

    const reviews = await fetchProductReviews("1");
    expect(reviews).toHaveLength(2);
  });
});

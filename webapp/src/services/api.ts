import type { Product, QA, Review } from "../types/product";
import { API_URL } from "./config";

export async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${id}`);
  const json = await res.json();

  if (!res.ok || res.status === 404 || res.status === 500) {
    throw new Error(json.error || "Error al obtener producto");
  }

  return json;
}

export async function fetchProductQAs(id: string): Promise<QA[]> {
  const res = await fetch(`${API_URL}/products/${id}/qas`);
  return res.json();
}

export async function fetchProductReviews(id: string): Promise<Review[]> {
  const res = await fetch(`${API_URL}/products/${id}/reviews`);
  return res.json();
}

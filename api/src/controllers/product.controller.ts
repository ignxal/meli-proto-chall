import { Request, Response } from "express";
import { Product, Review, QuestionAnswer } from "../models/product.model";
import productsData from "../data/products.json";
import questionanswerData from "../data/questionanswer.json";
import reviewsData from "../data/reviews.json";

const products: Product[] = productsData as Product[];
const qas: QuestionAnswer[] = questionanswerData as QuestionAnswer[];
const reviews: Review[] = reviewsData as Review[];

export const getProductById = (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).json({ error: "ID de producto no proporcionado" });
    return
  }
  
  const product = products.find((x) => x.id === req.params.id);

  if (!product) {
    res.status(404).json({ error: "Producto no encontrado" });
    return 
  }
  
  if (product.status !== "active") {
    res.status(400).json({ error: "Producto no disponible" });
    return 
  }

  res.status(200).json(product);
};

export const getQAsByProductId = (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).json({ error: "ID de producto no proporcionado" });
    return
  }
  
  const qasFiltered = qas.filter(
    (x: QuestionAnswer) => x.productId === req.params.id
  );

  if (!qasFiltered || qasFiltered.length < 1) {
    res.status(404).json([]);
    return 
  }

  res.status(200).json(qasFiltered || []);
};

export const getReviewsByProductId = (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).json({ error: "ID de producto no proporcionado" });
    return
  }

  const reviewsFiltered = reviews.filter(
    (x: Review) => x.productId === req.params.id
  );

  if (!reviewsFiltered || reviewsFiltered.length < 1) {
    res.status(404).json([]);
    return 
  } 

  res.status(200).json(reviewsFiltered);
};

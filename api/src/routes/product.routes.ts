import { Router } from "express";
import {
  getProductById,
  getQAsByProductId,
  getReviewsByProductId,
} from "../controllers/product.controller";

const productRoutes = Router();

productRoutes.get("/:id", getProductById);
productRoutes.get("/:id/qas", getQAsByProductId);
productRoutes.get("/:id/reviews", getReviewsByProductId);

export default productRoutes;

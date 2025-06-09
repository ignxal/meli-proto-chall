import { Router } from "express";
import {
  getProductById,
  getCommentsByProductId,
  getReviewsByProductId,
} from "../controllers/product.controller";

const productRoutes = Router();

productRoutes.get("/:id", getProductById);
productRoutes.get("/:id/comments", getCommentsByProductId);
productRoutes.get("/:id/reviews", getReviewsByProductId);

export default productRoutes;

import { Request, Response } from "express";
import {
  getProductById,
  getQAsByProductId,
  getReviewsByProductId,
} from "../src/controllers/product.controller";
import productsData from "../src/data/products.json";
import questionanswerData from "../src/data/questionanswer.json";
import reviewsData from "../src/data/reviews.json";
import { Product, QuestionAnswer, Review } from "../src/models/product.model";

const mockProducts: Product[] = productsData as Product[];
const mockQAs: QuestionAnswer[] = questionanswerData as QuestionAnswer[];
const mockReviews: Review[] = reviewsData as Review[];
const mockResponse = () => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnThis();
  res.json = jest.fn().mockReturnThis();
  return res as Response;
};

describe("Product Controller", () => {
  let res: Response;

  beforeEach(() => {
    res = mockResponse();
  });

  describe("getProductById", () => {
    it("should return 400 if product ID is not provided", () => {
      const req: Partial<Request> = { params: {} };
      getProductById(req as Request, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "ID de producto no proporcionado",
      });
    });

    it("should return 404 if product is not found", () => {
      const req: Partial<Request> = { params: { id: "nonExistentId" } };
      getProductById(req as Request, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "Producto no encontrado" });
    });

    it("should return 400 if product is not active", () => {
      const inactiveProduct = mockProducts.find(
        (p) => p.status !== "active"
      );
      if (!inactiveProduct) {
        const tempInactiveProduct: Product = {
          id: "inactiveProduct123",
          site_id: "MLA",
          title: "Inactive Test Product",
          seller_id: 123,
          category_id: "MCO1234",
          price: 100,
          base_price: 100,
          original_price: 100,
          currency_id: "ARS",
          initial_quantity: 1,
          available_quantity: 1,
          sold_quantity: 0,
          sale_terms: [],
          buying_mode: "buy_it_now",
          listing_type_id: "gold_special",
          start_time: "2023-01-01T00:00:00.000Z",
          stop_time: "2023-01-01T00:00:00.000Z",
          condition: "new",
          permalink: "http://example.com/inactive",
          pictures: [],
          description: "This is an inactive test product.",
          accepts_mercadopago: true,
          tags: [],
          shipping: {},
          status: "paused",
          date_created: "2023-01-01T00:00:00.000Z",
          last_updated: "2023-01-01T00:00:00.000Z",
          category: "Electronics",
          subcategories: [],
          recommendations: "",
        };
        mockProducts.push(tempInactiveProduct);
        const req: Partial<Request> = {
          params: { id: tempInactiveProduct.id },
        };
        getProductById(req as Request, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: "Producto no disponible" });

        mockProducts.pop();
      } else {
        const req: Partial<Request> = { params: { id: inactiveProduct.id } };
        getProductById(req as Request, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: "Producto no disponible" });
      }
    });

    it("should return 200 and the product if found and active", () => {

      const activeProduct = mockProducts.find((p) => p.status === "active");
      if (!activeProduct) {

        const tempActiveProduct: Product = {
          id: "activeProduct123",
          site_id: "MLA",
          title: "Active Test Product",
          seller_id: 456,
          category_id: "MCO5678",
          price: 200,
          base_price: 200,
          original_price: 200,
          currency_id: "ARS",
          initial_quantity: 5,
          available_quantity: 5,
          sold_quantity: 0,
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
        };
        mockProducts.push(tempActiveProduct);
        const req: Partial<Request> = {
          params: { id: tempActiveProduct.id },
        };
        getProductById(req as Request, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(tempActiveProduct);
        mockProducts.pop();
      } else {
        const req: Partial<Request> = { params: { id: activeProduct.id } };
        getProductById(req as Request, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(activeProduct);
      }
    });
  });

  describe("getQAsByProductId", () => {
    it("should return 400 if product ID is not provided", () => {
      const req: Partial<Request> = { params: {} };
      getQAsByProductId(req as Request, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "ID de producto no proporcionado",
      });
    });

    it("should return 404 if no QAs are found for the product", () => {
      const req: Partial<Request> = { params: { id: "noQAsProductId" } };
      getQAsByProductId(req as Request, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith([]);
    });

    it("should return 200 and a list of QAs if found", () => {
      const productWithQAsId = mockQAs.length > 0 ? mockQAs[0].productId : "productWithQAs";
      
      if (mockQAs.length === 0) {
        const tempQA: QuestionAnswer = {
          id: 1,
          userId: 1,
          productId: productWithQAsId,
          question: "Test question?",
          answer: "Test answer.",
          date: "2023-01-01T00:00:00.000Z",
        };
        mockQAs.push(tempQA);
      }

      const req: Partial<Request> = { params: { id: productWithQAsId } };
      getQAsByProductId(req as Request, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        mockQAs.filter((qa) => qa.productId === productWithQAsId)
      );
      if (mockQAs.length === 1 && mockQAs[0].productId === productWithQAsId && mockQAs[0].question === "Test question?") {
        mockQAs.pop(); // Remove the temporary QA if it was added
      }
    });
  });

  describe("getReviewsByProductId", () => {
    it("should return 400 if product ID is not provided", () => {
      const req: Partial<Request> = { params: {} };
      getReviewsByProductId(req as Request, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "ID de producto no proporcionado",
      });
    });

    it("should return 404 if no reviews are found for the product", () => {
      const req: Partial<Request> = { params: { id: "noReviewsProductId" } };
      getReviewsByProductId(req as Request, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith([]);
    });

    it("should return 200 and a list of reviews if found", () => {
      const productWithReviewsId = mockReviews.length > 0 ? mockReviews[0].productId : "productWithReviews";

      if (mockReviews.length === 0) {
        const tempReview: Review = {
          id: 1,
          productId: productWithReviewsId,
          userId: 1,
          title: "Great product",
          comments: "Loved it!",
          rating: 5,
          likes: 10,
          dislikes: 0,
        };
        mockReviews.push(tempReview);
      }

      const req: Partial<Request> = { params: { id: productWithReviewsId } };
      getReviewsByProductId(req as Request, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        mockReviews.filter((review) => review.productId === productWithReviewsId)
      );
      if (mockReviews.length === 1 && mockReviews[0].productId === productWithReviewsId && mockReviews[0].title === "Great product") {
        mockReviews.pop();
      }
    });
  });
});
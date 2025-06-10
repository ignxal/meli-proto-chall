import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

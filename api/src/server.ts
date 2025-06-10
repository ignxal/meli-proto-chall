import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoutes from "./routes/product.routes";
require('dotenv').config()

const app = express();
app.use(morgan("dev")); 
app.use(express.json());
app.use(cors());
app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listining on port ${PORT}`);
});

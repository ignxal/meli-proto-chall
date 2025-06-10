import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoutes from "./routes/product.routes";
import fs from "node:fs";
import path from "node:path";
require('dotenv').config()

const app = express();
const logsDirectory = path.join(__dirname, "logs");
const logFilePath = path.join(logsDirectory, "access.log");

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory, { recursive: true });
  console.log(`Created logs directory: ${logsDirectory}`);
}

const accessLogStream = fs.createWriteStream(logFilePath, { flags: "a" });

app.use(morgan("dev")); 
app.use(morgan("combined", { stream: accessLogStream }));
app.use(express.json());
app.use(cors());
app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listining on port ${PORT}`);
});

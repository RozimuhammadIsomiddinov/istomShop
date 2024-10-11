import dotenv from "dotenv";
import express from "express";

import path from "path";

import cors from "cors";
import productRouter from "./router/productRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import consultRouter from "./router/consultRouter.js";
import { adminRouter } from "./admin.mjs";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use("/admin-istom", adminRouter);
app.use("/public", express.static(path.resolve("./public")));

app.use("/", productRouter);
app.use("/", categoryRouter);
app.use("/", consultRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

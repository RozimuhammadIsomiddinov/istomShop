import dotenv from "dotenv";
import express from "express";

import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";

import cors from "cors";
import productRouter from "./router/productRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import consultRouter from "./router/consultRouter.js";
import orderRouter from "./router/orderRouter.js";
import cartRouter from "./router/cartRouter.js";
import discountRouter from "./router/discountRouter.js";

import { adminRouter } from "./admin.mjs";

dotenv.config();

const app = express();

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Cars API",
      version: "1.0.0",
      description: "Car management API documentation",
    },
    servers: [
      {
        url: "http://localhost:3075/",
      },
    ],
  },
  apis: ["./router/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use("/admin-istom", adminRouter);
app.use("/public", express.static(path.resolve("./public")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/", productRouter);
app.use("/", categoryRouter);
app.use("/", consultRouter);
app.use("/", orderRouter);
app.use("/", cartRouter);
app.use("/", discountRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Swagger is running on http://localhost:${port}/api-docs`);
});

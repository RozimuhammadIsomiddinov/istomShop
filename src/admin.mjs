import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/sequelize";
import Product from "./data/models/product.js";
import Category from "./data/models/category.js";
import Consult from "./data/models/consult.js";
import Order from "./data/models/order.js";
import Cart from "./data/models/cart.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import uploadFeature from "@adminjs/upload";

dotenv.config();
AdminJS.registerAdapter({ Database, Resource });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const adminJs = new AdminJS({
  resources: [
    {
      resource: Product,
      options: {
        listProperties: [
          "id",
          "title",
          "subtitle",
          "image",
          "cost",
          "description",
          "category_id",
        ],
        properties: {
          id: {
            isVisible: { list: true, edit: false, filter: true, show: true },
          },
          title: { isVisible: true },
          subtitle: { isVisible: true },
          image: { isVisible: true },
          cost: { isVisible: true },
          description: { isVisible: true },
          category_id: { isVisible: true },
        },
      },
    },
    {
      resource: Category,
      options: {
        listProperties: ["id", "name", "description"],
        properties: {
          id: {
            isVisible: { list: true, edit: false, filter: true, show: true },
          },
          name: { isVisible: true },
          description: { isVisible: true },
        },
      },
    },
    {
      resource: Consult,
      options: {
        listProperties: ["id", "name", "phone", "question"],
        properties: {
          id: {
            isVisible: { list: true, edit: false, filter: true, show: true },
          },
          name: { isVisible: true },
          phone: { isVisible: true },
          question: { isVisible: true },
        },
      },
    },
    {
      resource: Order,
      options: {
        listProperties: [
          "id",
          "name",
          "phone",
          "email",
          "product_id",
          "quantity",
        ],
        properties: {
          id: {
            isVisible: { list: true, edit: false, filter: true, show: true },
          },
          name: { isVisible: true },
          phone: { isVisible: true },
          email: { isVisible: true },
          product_id: { isVisible: true },
          quantity: { isVisible: true },
        },
      },
    },
    {
      resource: Cart,
      options: {
        listProperties: ["id", "product_id", "added_time"],
        properties: {
          id: {
            isVisible: { list: true, edit: false, filter: true, show: true },
          },
          product_id: { isVisible: true },
          added_time: { isVisible: true, type: "date" },
        },
      },
    },
  ],
  rootPath: "/admin-istom",
  branding: {
    companyName: "istom Shop",
    softwareBrothers: false,
  },
});

// AdminJS routerini yaratish
const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminJs, adminRouter };

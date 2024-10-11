import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/sequelize";
import Product from "./data/models/product.js";
import Category from "./data/models/category.js";
import Consult from "./data/models/consult.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();
AdminJS.registerAdapter({ Database, Resource });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create upload directory if it does not exist
const publicFolderPath = path.join(__dirname, "public");
const imagesFolderPath = path.join(publicFolderPath, "images");

if (!fs.existsSync(publicFolderPath)) {
  fs.mkdirSync(publicFolderPath);
  console.log("Public folder created successfully.");
}

if (!fs.existsSync(imagesFolderPath)) {
  fs.mkdirSync(imagesFolderPath);
  console.log("Images folder created successfully.");
}

// Step 1: Initialize ComponentLoader

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
          title: {
            isVisible: { list: true, edit: true, filter: true, show: true },
          },
          subtitle: {
            isVisible: { list: true, edit: true, filter: true, show: true },
          },
          image: {
            components: {},
          },
          cost: {
            isVisible: { list: true, edit: true, filter: true, show: true },
          },
          description: {
            isVisible: { list: true, edit: true, filter: true, show: true },
          },
          category_id: {
            isVisible: { list: true, edit: true, filter: true, show: true },
          },
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
          name: {
            isVisible: { list: true, edit: false, filter: true, show: true },
          },
          phone: {
            isVisible: { list: true, edit: false, filter: true, show: true },
          },
          question: {
            isVisible: { list: true, edit: false, filter: true, show: true },
          },
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

const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminJs, adminRouter };

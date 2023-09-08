import { Router } from "express";
import * as productController from "../controllers/productController.js";
import { upload } from "../multer.js";

const productRouter = new Router();

productRouter.get("/products", productController.getAllProducts);
productRouter.get("/products/:id", productController.getOneProduct);
productRouter.post(
  "/products",
  upload.single("image"),
  productController.createProduct
);

export default productRouter;

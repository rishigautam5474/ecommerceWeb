import express from "express";
import { createProduct, getSpecificProduct, getAllProduct, updateProduct, deleteProduct, getProductByCategory } from "../controller/product.js";

const router = express.Router();

//Router
router.get("/", getAllProduct);
router.get('/:id', getSpecificProduct);
router.get('/category/:categoryId', getProductByCategory)
router.post("/create", createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
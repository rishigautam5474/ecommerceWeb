import express from "express";
import { createCategory, deleteCategory, getAllCategory, getSpecificCategory, updateCategory, getCategoryByProduct } from "../controller/categories.js";

const router = express.Router();

router.get('/', getAllCategory);
router.get('/:id', getSpecificCategory)
router.get('/product/:productId', getCategoryByProduct)
router.post('/create', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;
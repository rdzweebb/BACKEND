import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductCategories,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// @route   GET /api/products
router.get('/', getProducts);

// @route   GET /api/products/categories
router.get('/categories', getProductCategories);

// @route   GET /api/products/:id
router.get('/:id', getProductById);

// @route   POST /api/products
router.post('/', protect, admin, upload.single('image'), createProduct);

// @route   PUT /api/products/:id
router.put('/:id', protect, admin, upload.single('image'), updateProduct);

// @route   DELETE /api/products/:id
router.delete('/:id', protect, admin, deleteProduct);

export default router;
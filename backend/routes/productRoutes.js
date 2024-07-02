const express = require('express');
const { getProducts, getProductById } = require('../controllers/productController');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getProducts);
router.get('/:id', verifyToken, getProductById);

module.exports = router;

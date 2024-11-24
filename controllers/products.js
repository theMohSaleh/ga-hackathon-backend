const express = require('express');
const Product = require('../models/Product');
const verifyToken = require('../middleware/verify-token.js');
const router = express.Router();


//GET /products - Get a list of all products
router.get('/', async (req, res) => {
    try {
      const productsFound = await Product.find().limit(100);
      if (!productsFound.length) {
        res.status(404);
        throw new Error('No products found');
      }
      res.status(200).json(productsFound);
    } catch (error) {
      if (res.statusCode === 404) {
        res.json({ error: error.message });
      } else {
        console.error(error)
        res.status(500).json({ error: error.message });
      }
    }
  });

 // GET /products/:productId - Get details of a specific product
 router.get('/:productId', async (req, res) => {
    try {
      const foundProduct = await Product.findById(req.params.productId);
      if (!foundProduct) {
        res.status(404);
        throw new Error('Product not found.');
      }
      res.status(200).json(foundProduct);
    } catch (error) {
      if (res.statusCode === 404) {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  });

module.exports = router
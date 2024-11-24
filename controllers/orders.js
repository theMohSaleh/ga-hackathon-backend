const express = require('express');
const Order = require('../models/Order');
const verifyToken = require('../middleware/verify-token.js');
const router = express.Router();


 // GET /orders - Get a list of all past orders

router.get('/', async (req, res) => {
  try {
    const ordersFound = await Order.find().populate('customer').populate('order_items.product');
    if (!ordersFound.length) {
      res.status(404);
      throw new Error('No orders found');
    }
    res.status(200).json(ordersFound);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});


// GET /orders/:orderId - Get details of a specific order

router.get('/:orderId', async (req, res) => {
  try {
    const foundOrder = await Order.findById(req.params.orderId).populate('customer').populate('order_items.product');
    if (!foundOrder) {
      res.status(404);
      throw new Error('Order not found.');
    }
    res.status(200).json(foundOrder);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

module.exports = router;

const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product_id: String,
    sales: Number,
    quantity: Number,
    discount: Number,
    profit: Number,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
  });
  
const orderSchema = new mongoose.Schema({
    order_id: { type: String, unique: true },
    order_date: Date,
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    order_items: [orderItemSchema], 
  });

  const Order = mongoose.model('Order', orderSchema);

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: { type: String, unique: true },
    category: String,
    sub_category: String,
    product_name: String,
    product_cost_to_consumer: Number,
    sustainabilityFeatures: [String], // E.g., 'Fair Trade', 'Carbon Neutral'
    carbonFootprint: Number, // Estimated value of carbon emissions
  });
  
  const Product = mongoose.model('Product', productSchema);

  
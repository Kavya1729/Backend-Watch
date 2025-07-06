const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  originalPrice: Number,
  image: String,
  description: String,
  features: [String],
  specifications: {
    movement: String,
    case: String,
    diameter: String,
    waterResistance: String,
    strap: String,
  },
  inStock: Boolean,
  rating: Number,
  reviewCount: Number,
});

module.exports = mongoose.model("Product", productSchema);

const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  const { sort, search, category } = req.query;
  let query = {};
  if (search) query.name = { $regex: search, $options: "i" };
  if (category) query.category = category;

  let products = await Product.find(query);
  if (sort === "price_asc") products.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") products.sort((a, b) => b.price - a.price);
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};
  
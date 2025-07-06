const User = require("../models/User");

exports.addToWishlist = async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user.wishlist.includes(req.body.productId)) {
    user.wishlist.push(req.body.productId);
  }
  await user.save();
  res.json(user);
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const user = await User.findById(req.params.userId);
  const existing = user.cart.find(
    (item) => item.product.toString() === productId
  );
  if (existing) existing.quantity += quantity;
  else user.cart.push({ product: productId, quantity });
  await user.save();
  res.json(user);
};

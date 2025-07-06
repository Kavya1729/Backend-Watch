const User = require("../models/User");

exports.buyNow = async (req, res) => {
  const user = await User.findById(req.params.userId);
  user.cart = [];
  await user.save();
  res.json({ message: "Purchase completed" });
};

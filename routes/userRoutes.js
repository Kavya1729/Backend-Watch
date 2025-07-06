const express = require("express");
const router = express.Router();
const { addToWishlist, addToCart } = require("../controllers/userController");

router.post("/:userId/wishlist", addToWishlist);
router.post("/:userId/cart", addToCart);

module.exports = router;

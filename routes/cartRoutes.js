const express = require("express");
const router = express.Router();
const { buyNow } = require("../controllers/cartController");

router.post("/:userId/buy", buyNow);

module.exports = router;

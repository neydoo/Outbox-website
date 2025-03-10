const express = require("express");
const router = express.Router();
const auth = require("../Controllers/AuthController");

router.post("/register", auth.registerAdmin);
router.post("/complete-registration/:id", auth.verifyUser);
router.post("/login", auth.login);

// router.get("/orders", auth.viewAllCarts);

// router.post("/create-order", auth.saveCart);

module.exports = router;

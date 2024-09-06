const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");

const {
  validateRegister,
  validateLogin,
} = require("../validators/authValidator");
const authMiddleware = require("../middlewares/authMiddleware"); // Import correct du middleware

const router = express.Router();

router.post("/register", validateRegister, registerUser);
router.post("/login", validateLogin, loginUser);
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});
module.exports = router;

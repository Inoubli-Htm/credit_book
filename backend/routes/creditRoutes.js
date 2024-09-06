const express = require("express");
const {
  createCredit,
  getUserCredit,
  payCredit,
} = require("../controllers/creditController");

const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authMiddleware, createCredit); // Admin only
router.get("/", authMiddleware, getUserCredit);
router.post("/pay", authMiddleware, payCredit);

module.exports = router;

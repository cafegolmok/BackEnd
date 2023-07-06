// routes/reviewRoutes.js

const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const { isLoggedIn } = require("../middlewares");

router.get("/", reviewController.getAllReviews);
router.get("/:id", reviewController.getReview);
router.post("/", isLoggedIn, reviewController.createReview);
router.patch("/:id", isLoggedIn, reviewController.updateReview);
router.delete("/:id", isLoggedIn, reviewController.deleteReview);

module.exports = router;

// routes/bookmarkRoutes.js

const express = require("express");
const bookmarkController = require("../controllers/bookmarkController");
const { isLoggedIn } = require("../middlewares");
const router = express.Router();

router
  .route("/")
  .get(isLoggedIn, bookmarkController.getAllBookmarks)
  .post(isLoggedIn, bookmarkController.createBookmark);

router
  .route("/:id")
  .get(isLoggedIn, bookmarkController.getBookmark)
  .patch(isLoggedIn, bookmarkController.updateBookmark)
  .delete(isLoggedIn, bookmarkController.deleteBookmark);

module.exports = router;

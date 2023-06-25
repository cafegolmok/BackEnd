// routes/bookmarkRoutes.js

const express = require("express");
const bookmarkController = require("../controllers/bookmarkController");
const router = express.Router();

router
  .route("/")
  .get(bookmarkController.getAllBookmarks)
  .post(bookmarkController.createBookmark);

router
  .route("/:id")
  .get(bookmarkController.getBookmark)
  .patch(bookmarkController.updateBookmark)
  .delete(bookmarkController.deleteBookmark);

module.exports = router;

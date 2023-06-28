// routes/cafeRoutes.js

const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController");
const multer = require("multer");
const upload = require("../multerConfig");
const { isLoggedIn } = require("../middlewares");

// 모든 카페 정보를 얻거나 새로운 카페를 생성하는 라우트
router
  .route("/")
  .get(cafeController.getAllCafes)
  .post(isLoggedIn, upload.single("image"), cafeController.createCafe);

// 특정 카페의 정보를 조회, 수정, 삭제하는 라우트
router
  .route("/:id")
  .get(cafeController.getCafe)
  .patch(isLoggedIn, upload.single("image"), cafeController.updateCafe)
  .delete(isLoggedIn, cafeController.deleteCafe);

module.exports = router;

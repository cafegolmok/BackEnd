// routes/cafeRoutes.js

const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController");
const multer = require("multer");
const upload = require("../multerConfig");

// 모든 카페 정보를 얻거나 새로운 카페를 생성하는 라우트
router
  .route("/")
  .get(cafeController.getAllCafes)
  .post(upload.single("image"), cafeController.createCafe); // multer 미들웨어 적용

// 특정 카페의 정보를 조회, 수정, 삭제하는 라우트
router
  .route("/:id")
  .get(cafeController.getCafe)
  .patch(upload.single("image"), cafeController.updateCafe) // multer 미들웨어 적용
  .delete(cafeController.deleteCafe);
module.exports = router;

// routes/cafeRoutes.js

const express = require("express");
const cafeController = require("../controllers/cafeController");
const router = express.Router();

// 모든 카페 정보를 얻거나 새로운 카페를 생성하는 라우트
router
  .route("/")
  .get(cafeController.getAllCafes)
  .post(cafeController.createCafe);

// 특정 카페의 정보를 조회, 수정, 삭제하는 라우트
router
  .route("/:id")
  .get(cafeController.getCafe)
  .put(cafeController.updateCafe)
  .delete(cafeController.deleteCafe);

module.exports = router;

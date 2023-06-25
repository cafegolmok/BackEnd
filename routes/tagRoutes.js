// routes/tagRoutes.js

const express = require("express");
const router = express.Router();

const tagController = require("../controllers/tagController");
const adminAuth = require("../middlewares/adminAuth");

// 관리자만 태그를 생성할 수 있다.
router.post("/tags", adminAuth, tagController.createTag);

// 모든 사용자는 태그를 조회할 수 있다.
router.get("/tags", tagController.getAllTags);

// 관리자만 태그를 수정할 수 있다.
router.patch("/tags/:id", adminAuth, tagController.updateTag);

// 관리자만 태그를 삭제할 수 있다.
router.delete("/tags/:id", adminAuth, tagController.deleteTag);

module.exports = router;

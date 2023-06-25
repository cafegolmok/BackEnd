// routes/categoryRoutes.js

const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");
const adminAuth = require("../middlewares/adminAuth");

// 관리자만 카테고리를 생성할 수 있다.
router.post("/categories", adminAuth, categoryController.createCategory);

// 모든 사용자는 카테고리를 조회할 수 있다.
router.get("/categories", categoryController.getAllCategories);

// 관리자만 카테고리를 수정할 수 있다.
router.patch("/categories/:id", adminAuth, categoryController.updateCategory);

// 관리자만 카테고리를 삭제할 수 있다.
router.delete("/categories/:id", adminAuth, categoryController.deleteCategory);

module.exports = router;

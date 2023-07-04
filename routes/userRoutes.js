// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");

// "/" 경로에 대하여, GET 요청은 모든 사용자를 가져오고, POST 요청은 새 사용자를 생성
router
  .route("/")
  .get(userController.getAllUsers)
  .post(isNotLoggedIn, userController.createUser);

// "/:id" 경로에 대하여, GET 요청은 해당 id의 사용자를 가져오고, PATCH 요청은 사용자 정보를 업데이트, DELETE 요청은 사용자를 삭제
router
  .route("/:id")
  .get(userController.getUser)
  .patch(isLoggedIn, userController.updateUser)
  .delete(isLoggedIn, userController.deleteUser);

// 회원가입 라우트를 설정
// router.post("/signup", isNotLoggedIn, userController.signup);

// 로그인 라우트 설정
// router.post("/login", isNotLoggedIn, authController.login);

// 로그아웃 라우트 설정
// router.post("/logout", isLoggedIn, authController.logout);

module.exports = router;

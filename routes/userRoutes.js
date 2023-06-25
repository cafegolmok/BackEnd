// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const router = express.Router();

// "/" 경로에 대하여, GET 요청은 모든 사용자를 가져오고, POST 요청은 새 사용자를 생성
router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

// "/:id" 경로에 대하여, GET 요청은 해당 id의 사용자를 가져오고, PATCH 요청은 사용자 정보를 업데이트, DELETE 요청은 사용자를 삭제
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// 회원가입 라우트를 설정
// "/signup" 경로에 대하여, POST 요청은 새 사용자를 생성
router.post("/signup", async (req, res, next) => {
  const { email, name, password } = req.body; // 요청 본문에서 이메일, 이름, 비밀번호를 가져옴
  try {
    const exUser = await User.findOne({ where: { email } }); // 해당 이메일을 가진 사용자를 데이터베이스에서 탐색
    if (exUser) {
      // 이미 가입된 이메일인 경우
      return res.status(409).json({ error: '이미 존재하는 이메일입니다' }); // JSON 형식으로 에러 메시지를 응답
    }
    const hash = await bcrypt.hash(password, 12); // 입력받은 비밀번호 해시화
    await User.create({
      // 새 User를 생성하고 데이터베이스에 저장
      email,
      name,
      password: hash, // 해시된 비밀번호를 저장
    });
    return res.status(200).json({ message: '회원가입이 성공적으로 완료되었습니다' }); // JSON 형식으로 성공 메시지를 응답
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;

// controllers/authController.js

const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// 사용자 가입 처리
exports.signup = async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    // 이메일이 이미 등록되어 있는지 확인
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      // 이미 등록된 이메일의 경우 에러 메시지 반환
      return res.status(409).json({ error: "이미 사용 중인 이메일입니다." });
    }
    // 비밀번호를 해시 처리
    const hash = await bcrypt.hash(password, 12);
    // 새로운 사용자 생성
    await User.create({
      email,
      nick,
      password: hash,
    });
    // 회원가입 성공 메시지 반환
    return res
      .status(201)
      .json({ message: "회원가입이 성공적으로 완료되었습니다." });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// 로그인 처리
exports.login = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      // 인증 오류 발생 시 에러 메시지 반환
      return res.status(400).json({
        message: "로그인에 실패하였습니다.",
        user: user,
      });
    }
    // 세션에 사용자 정보 저장
    req.login(user, { session: false }, async (err) => {
      if (err) {
        res.send(err);
      }
      // JWT 페이로드 설정
      const payload = {
        email: user.email,
        expires:
          Date.now() +
          parseInt(process.env.JWT_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000,
      };

      // JWT 토큰 생성
      const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET);

      // 토큰을 반환
      return res.json({ user, token });
    });
  })(req, res, next);
};

// 로그아웃 처리
exports.logout = (req, res) => {
  req.logout();
  // 로그아웃 성공 메시지 반환
  res.status(200).json({ message: "로그아웃이 성공적으로 완료되었습니다." });
};

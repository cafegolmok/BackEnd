// routes/authRoutes.js

const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { isNotLoggedIn } = require("../middlewares");

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "로그인 정보가 올바르지 않습니다. 다시 시도해 주세요.",
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // JWT 페이로드에는 사용자 정보를 포함
      const payload = {
        email: user.email,
        expires:
          Date.now() +
          parseInt(process.env.JWT_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000,
      };

      // 토큰 생성
      const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET);

      // JSON 형태로 토큰 반환
      return res.json({ user, token });
    });
  })(req, res);
});

module.exports = router;

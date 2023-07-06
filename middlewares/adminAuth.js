// middlewares/adminAuth.js

const adminAuth = (req, res, next) => {
  // user 정보는 보통 로그인 세션 또는 JWT 인증 과정에서 req.user에 할당됨
  // 따라서 req.user에 접근해서 userType이 'admin'인지 확인
  if (!req.user || req.user.userType !== "admin") {
    return res.status(403).send({ error: "관리자 권한이 필요합니다." });
  }

  // userType이 'admin'이면 다음 미들웨어로 넘어감
  next();
};

module.exports = adminAuth;

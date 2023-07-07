// middlewares/rateLimiter.js

const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 5, // 각 IP는 windowMs 마다 5번의 요청을 허용
  handler: function (req, res /*, next*/) {
    res.status(this.statusCode).json({
      status: 429,
      message:
        "너무 많은 로그인 시도가 감지되었습니다. 15분 후에 다시 시도해 주세요.",
    });
  },
});

module.exports = loginLimiter;

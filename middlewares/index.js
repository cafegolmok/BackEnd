// middlewares/index.js
const adminAuth = require("./adminAuth");
const errorHandler = require("./errorHandler");

module.exports = {
  adminAuth,
  errorHandler,
  // 필요한 다른 미들웨어들도 이곳에서 export한다
};

// middlewares/index.js
const adminAuth = require("./adminAuth");
const errorHandler = require("./errorHandler");
const isLoggedIn = require("./isLoggedIn");
const isNotLoggedIn = require("./isNotLoggedIn");

module.exports = {
  adminAuth,
  errorHandler,
  isLoggedIn,
  isNotLoggedIn,
  // 필요한 다른 미들웨어들도 export
};

// middlewares/index.js
const adminAuth = require("./adminAuth");
const errorHandler = require("./errorHandler");
const isLoggedIn = require("./isLoggedIn");
const isNotLoggedIn = require("./isNotLoggedIn");
const loginLimiter = require("./rateLimiter");

module.exports = {
  adminAuth,
  errorHandler,
  isLoggedIn,
  isNotLoggedIn,
  loginLimiter,
};

// routes/authRoutes.js

const router = require("express").Router();
const { isLoggedIn, isNotLoggedIn, loginLimiter } = require("../middlewares");
const {
  signup,
  login,
  logout,
  updateProfileImage,
  checkLoginStatus
} = require("../controllers/authController");

router.post("/signup", isNotLoggedIn, signup);
router.patch("/profileImage", isLoggedIn, updateProfileImage);
router.post("/login", isNotLoggedIn, loginLimiter, login);
router.get("/logout", isLoggedIn, logout);
router.get("/check-login-status", checkLoginStatus);

module.exports = router;

// routes/authRoutes.js

const router = require("express").Router();
const { isNotLoggedIn } = require("../middlewares");
const { signup, login, logout } = require("../controllers/authController");

router.post("/signup", isNotLoggedIn, signup);
router.post("/login", isNotLoggedIn, login);
router.get("/logout", isNotLoggedIn, logout);

module.exports = router;

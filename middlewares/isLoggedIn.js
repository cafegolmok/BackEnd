// middlewares/isLoggedIn.js

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ error: "로그인이 필요합니다." });
  }
};

module.exports = isLoggedIn;

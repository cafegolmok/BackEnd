// middlewares/isNotLoggedIn.js

const isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(403).json({ message: "로그인한 상태입니다." });
  }
};

module.exports = isNotLoggedIn;

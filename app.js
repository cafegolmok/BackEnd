// app.js

const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const cafeRoutes = require("./routes/cafeRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const tagRoutes = require("./routes/tagRoutes");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const {
  errorHandler,
  adminAuth,
  isLoggedIn,
  isNotLoggedIn,
} = require("./middlewares");

const PORT = process.env.PORT || 8000;

// JSON 데이터 파싱을 위한 미들웨어
app.use(express.json());

// 라우팅 설정
app.use("/users", userRoutes);
app.use("/cafes", cafeRoutes);
app.use("/bookmarks", bookmarkRoutes);
app.use("/reviews", reviewRoutes);
app.use("/tags", tagRoutes);
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);

// 404 에러 처리
app.use((req, res, next) => {
  var err = new Error("찾을 수 없는 페이지입니다.");
  err.status = 404;
  next(err);
});

// error handler 설정
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});

module.exports = app;

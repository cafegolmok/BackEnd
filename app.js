// app.js

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const passport = require("passport");

const userRoutes = require("./routes/userRoutes");
const cafeRoutes = require("./routes/cafeRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const tagRoutes = require("./routes/tagRoutes");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const passportConfig = require("./passport");

const {
  isLoggedIn,
  isNotLoggedIn,
  adminAuth,
  errorHandler,
} = require("./middlewares");
const PORT = process.env.PORT || 8000;

passportConfig();
dotenv.config();

// 미들웨어 설정
app.use(morgan("dev")); // HTTP 요청을 로그로 남김

app.use(
  cors({
    // CORS 정책을 설정합니다.
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.use(express.json()); // JSON 데이터 파싱을 위한 미들웨어

app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱
app.use(cookieParser(process.env.COOKIE_SECRET)); // 쿠키 파싱
app.use(
  session({
    // 세션 설정
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize()); // Passport를 초기화
app.use(passport.session()); // Passport 세션을 설정

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

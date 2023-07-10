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

dotenv.config();
passportConfig();

// 미들웨어 설정
app.use(morgan("dev")); // HTTP 요청을 로그로 남김

app.use(
  cors({
    // CORS 정책 설정
    origin: "http://localhost:3000",
    credentials: true, // 클라이언트에서 보낸 쿠키를 서버에서도 받을 수 있게
  })
);

app.use(express.json()); // JSON 데이터 파싱을 위한 미들웨어

app.use(cookieParser(process.env.COOKIE_SECRET)); // 쿠키 파싱
app.use(
  session({
    resave: false, // 세션을 언제나 저장할지 정하는 옵션
    saveUninitialized: false, // 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장하는지 정하는 옵션
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true, // 클라이언트에서 쿠키를 JavaScript로 제어할 수 없도록 설정하는 옵션
      secure: false, // true로 설정하면 https를 통해서만 쿠키가 전송
      maxAge: 24 * 60 * 60 * 1000, // 쿠키 유효기간 설정
    },
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

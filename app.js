// app.js

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const cafeRoutes = require("./routes/cafeRoutes")
const PORT = process.env.PORT || 8000;

// error handler 가져오기
// const errorHandler = require('./middlewares/errorHandler');

// JSON 데이터 파싱을 위한 미들웨어
app.use(express.json());

// 라우팅 설정
app.use("/", cafeRoutes);
app.use("/users", userRoutes);

// 404 에러 처리
app.use((req, res, next) => {
  var err = new Error("찾을 수 없는 페이지입니다.");
  err.status = 404;
  next(err);
});

// error handler 설정
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});

module.exports = app;

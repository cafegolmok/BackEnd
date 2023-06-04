const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// Import routes
const authRoutes = require('./routes/authRoutes');

// Import error handler
const errorHandler = require('./middlewares/errorHandler');

// JSON 데이터 파싱을 위한 미들웨어
app.use(express.json());

// Use routes
app.use(authRoutes);

// 404 에러 처리
app.use((req, res, next) => {
  var err = new Error("찾을 수 없는 페이지입니다.");
  err.status = 404;
  next(err);
});

// Use error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});

module.exports = app;
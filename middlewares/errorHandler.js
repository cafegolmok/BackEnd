// middlewares/errorHandler.js

module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "서버 내부 에러";

  // 에러 로그를 기록
  console.error(err);

  // 클라이언트에게 에러 메시지를 전달함
  res.status(status).send({
    error: {
      message: message,
      status: status,
    },
  });
};

// src/models/database.js

const mysql = require("mysql");

//데이터 베이스에 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "your_database",
});

connection.connect((err) => {
  if (err) {
    // 연결 오류 발생 시, 에러 메시지 출력
    console.error("Error connecting to the database", err);
    return;
  } // 연결 성공 시, 성공 메시지 출력
  console.log("Connected to the database");
});

// connection 객체를 다른 파일에서 사용할 수 있도록 내보냄
module.exports = connection;

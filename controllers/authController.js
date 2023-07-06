// controllers/authController.js

const bcrypt = require("bcrypt");
const passport = require("passport");
const { User } = require("../models");
const {
  validateSignupEmail,
  validateSignupPassword,
  validateSignupNickname,
  validateSignupPasswordConfirm,
} = require("../validations/validation.js");

// 회원가입 처리
exports.signup = async (req, res, next) => {
  const { email, nickname, password, passwordConfirm } = req.body;
  // 회원가입 입력 유효성 검사
  const emailErrors = validateSignupEmail(email);
  const passwordErrors = validateSignupPassword(password);
  const passwordConfirmErrors = validateSignupPasswordConfirm(
    password,
    passwordConfirm
  );
  const nicknameErrors = validateSignupNickname(nickname);

  if (
    emailErrors.length > 0 ||
    passwordErrors.length > 0 ||
    nicknameErrors.length > 0 ||
    passwordConfirmErrors.length > 0
  ) {
    return res.status(400).json({
      errors: {
        email: emailErrors,
        password: passwordErrors,
        passwordConfirm: passwordConfirmErrors,
        nickname: nicknameErrors,
      },
    });
  }

  try {
    // 이메일과 닉네임이 이미 등록되어 있는지 확인
    const exUserWithEmail = await User.findOne({ where: { email } });
    const exUserWithNickname = await User.findOne({ where: { nickname } });

    // 에러 메시지를 저장할 배열
    const errors = [];

    if (exUserWithEmail) {
      // 이미 등록된 이메일의 경우 에러 메시지 추가
      errors.push("이미 사용 중인 이메일입니다.");
    }
    if (exUserWithNickname) {
      // 이미 등록된 닉네임의 경우 에러 메시지 추가
      errors.push("이미 사용 중인 닉네임입니다.");
    }

    // 이미 등록된 이메일 또는 닉네임이 있을 경우 에러 메시지 반환
    if (errors.length > 0) {
      return res.status(409).json({ errors });
    }

    // 비밀번호를 해시 처리
    const hash = await bcrypt.hash(password, 12);
    // 새로운 사용자 생성
    await User.create({
      email,
      nickname,
      password: hash,
    });
    // 회원가입 성공 메시지 반환
    return res
      .status(201)
      .json({ message: "회원가입이 성공적으로 완료되었습니다." });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// 로그인 처리
exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (!user) {
      return res.status(400).send(info.message);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res
        .status(200)
        .json({ message: "로그인이 성공적으로 완료되었습니다." });
    });
  })(req, res, next);
};

// 로그아웃 처리
exports.logout = (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "세션 삭제 중 오류가 발생했습니다." });
    }
    res.status(200).json({ message: "로그아웃이 성공적으로 완료되었습니다." });
  });
};

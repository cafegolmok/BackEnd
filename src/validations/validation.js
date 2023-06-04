// src/utils/validation.js

// 회원가입 이메일 유효성 검사
export const validateSignupEmail = email => {
  const MAX_EMAIL_LENGTH = 50;
  const errors = [];

  if (!email) {
    errors.push('이메일을 입력해 주세요.');
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    errors.push('이메일을 50자 이내로 작성해주세요.');
  }

  // 이메일 형식 확인
  const emailRegEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegEx.test(email)) {
    errors.push('이메일 형식에 맞게 작성해 주세요.');
  }

  return errors;
};

// 회원가입 비밀번호 유효성 검사
export const validateSignupPassword = password => {
  const MIN_PASSWORD_LENGTH = 10;
  const MAX_PASSWORD_LENGTH = 20;
  const errors = [];

  if (!password) {
    errors.push('비밀번호를 입력해 주세요.');
  }

  if (
    password.length < MIN_PASSWORD_LENGTH ||
    password.length > MAX_PASSWORD_LENGTH
  ) {
    errors.push('비밀번호를 10 ~ 20자 이내로 입력해주세요.');
  }

  const specialCharRegEx = /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
  if (!specialCharRegEx.test(password)) {
    errors.push('특수문자를 포함해주세요.');
  }
  return errors;
};

// 회원가입 비밀번호 재확인 유효성 검사
export const validateSignupPasswordConfirm = (password, passwordConfirm) => {
  const errors = [];
  if (!passwordConfirm) {
    errors.push('비밀번호를 한번 더 입력해 주세요.');
  }
  if (password !== passwordConfirm) {
    errors.push('비밀번호가 일치하지 않습니다. 다시 입력해 주세요.');
  }
  return errors;
};

// 회원가입 닉네임 유효성 검사
export const validateSignupNickname = nickname => {
  const MIN_NICKNAME_LENGTH = 2;
  const MAX_NICKNAME_LENGTH = 20;
  const errors = [];

  if (!nickname) {
    errors.push('닉네임을 입력해 주세요.');
  }
  if (
    nickname.length < MIN_NICKNAME_LENGTH ||
    nickname.length > MAX_NICKNAME_LENGTH
  ) {
    errors.push('닉네임을 2 ~ 20자로 작성해 주세요.');
  }
  // 허용된 문자 확인
  const nicknameRegEx = /^[A-Za-z0-9가-힣_-]+$/;
  if (!nicknameRegEx.test(nickname)) {
    errors.push('닉네임은 문자와 숫자, 특수기호(_),(-)만 사용 가능합니다.');
  }
  return errors;
};

// 로그인 이메일 유효성 검사
export const validateLoginEmail = email => {
  const errors = [];
  if (!email) {
    errors.push('이메일을 입력해 주세요.');
  }

  // 이메일 형식 확인
  const emailRegEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegEx.test(email)) {
    errors.push('이메일 형식에 맞게 작성해 주세요.');
  }

  return errors;
};

// 로그인 비밀번호 유효성 검사
export const validateLoginPassword = password => {
  const errors = [];
  if (!password) {
    errors.push('비밀번호를 입력해 주세요.');
  }

  return errors;
};

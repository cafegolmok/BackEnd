
// passport/kakaoStrategy.js:
const KakaoStrategy = require('passport-kakao').Strategy;

module.exports = (passport) => {
  passport.use(new KakaoStrategy({
    clientID: KAKAO_ID,
    clientSecret: KAKAO_SECRET,
    callbackURL: CALLBACK_URL,
  },
  (accessToken, refreshToken, profile, done) => {
    // 사용자를 찾고 인증하는 로직을 여기에 작성
  }));
};
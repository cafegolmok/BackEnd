// passport/localStrategy.js

const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: false,
        passReqToCallback: false,
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ where: { email } });
          if (!user) {
            // 이메일에 해당하는 사용자가 없는 경우
            return done(null, false, { message: "이메일이 잘못되었습니다." });
          }
          if (!(await bcrypt.compare(password, user.password))) {
            // 비밀번호가 일치하지 않는 경우
            return done(null, false, { message: "비밀번호가 잘못되었습니다." });
          }
          // 인증 성공
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};

"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportGithub = _interopRequireDefault(require("passport-github"));

var _passportKakao = _interopRequireDefault(require("passport-kakao"));

var _User = _interopRequireDefault(require("./models/User"));

var _userController = require("./controllers/userController");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_passport["default"].use(_User["default"].createStrategy()); //const KakaoStrategy = KakaoLogin.Strategy;


_passport["default"].use("kakao", new _passportKakao["default"]({
  clientID: process.env.KAKAO_ID,
  clientSecret: process.env.KAKAO_SECRET,
  callbackURL: "http://localhost:4000".concat(_routes["default"].kakaocallback)
}, _userController.kakaoLoginCallback));

_passport["default"].use(new _passportGithub["default"]({
  clientID: process.env.GIT_ID,
  clientSecret: process.env.GIT_SECRET,
  callbackURL: "http://localhost:4000".concat(_routes["default"].githubcallback)
}, _userController.githubLoginCallback)); //passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());


_passport["default"].serializeUser(function (user, done) {
  done(null, user.id);
});

_passport["default"].deserializeUser(function (id, done) {
  _User["default"].findById(id, function (err, user) {
    done(err, user);
  });
});
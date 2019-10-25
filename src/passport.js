import passport from "passport";
import GithubLogin from "passport-github";
import KakaoLogin from "passport-kakao";
import User from "./models/User";
import { githubLoginCallback, kakaoLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

//const KakaoStrategy = KakaoLogin.Strategy;

passport.use("kakao", new KakaoLogin({
  clientID: process.env.KAKAO_ID,
  clientSecret: process.env.KAKAO_SECRET,
  callbackURL: process.env.PRODUCTION
    ? `https://desolate-meadow-58147.herokuapp.com${routes.kakaocallback}`
    : `http://localhost:4000${routes.kakaocallback}`
},
  kakaoLoginCallback
)
);

passport.use(
  new GithubLogin(
    {
      clientID: process.env.GIT_ID,
      clientSecret: process.env.GIT_SECRET,
      callbackURL: process.env.PRODUCTION
        ? `https://desolate-meadow-58147.herokuapp.com${routes.githubcallback}`
        : `http://localhost:4000${routes.githubcallback}`
    },
    githubLoginCallback
  )
);

//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
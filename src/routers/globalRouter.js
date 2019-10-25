import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  githubLogin,
  postGithubLogIn,
  me,
  kakaoLogin,
  postKakaoLogin
} from "../controllers/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubcallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaocallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postKakaoLogin
);

globalRouter.get(routes.me, me);

export default globalRouter;

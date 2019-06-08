import passport from "passport";
import GithubLogin from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";

passport.use(User.createStrategy());

passport.use(
  new GithubLogin({
    clientID: process.env.GIT_ID,
    clientSecret: process.env.GIT_SECRET,
    callbackURL: "http://localhost:4000/auth/github/callback"
  }),
  githubLoginCallback
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

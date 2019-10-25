import express from "express";
import routes from "../routes";
import {
  userDetail,
  getChagePassword,
  postChagePassword,
  getUserProfile,
  postUserProfile
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

//userRouter.get(routes.user, user);
userRouter.get(routes.userProfile, onlyPrivate, getUserProfile);
userRouter.post(routes.userProfile, onlyPrivate, uploadAvatar, postUserProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChagePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChagePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

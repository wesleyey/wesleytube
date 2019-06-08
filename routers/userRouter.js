import express from "express";
import routes from "../routes";
import {
  userDetail,
  chagePassword,
  userProfile
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

//userRouter.get(routes.user, user);
userRouter.get(routes.userProfile, onlyPrivate, userProfile);
userRouter.get(routes.changePassword, onlyPrivate, chagePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

import express from "express";
import routes from "../routes";
import {
  user,
  userDetail,
  chagePassword,
  userProfile
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.user, user);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.userProfile, userProfile);
userRouter.get(routes.changePassword, chagePassword);

export default userRouter;
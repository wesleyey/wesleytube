"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _userController = require("../controllers/userController");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router(); //userRouter.get(routes.user, user);


userRouter.get(_routes["default"].userProfile, _middlewares.onlyPrivate, _userController.getUserProfile);
userRouter.post(_routes["default"].userProfile, _middlewares.onlyPrivate, _middlewares.uploadAvatar, _userController.postUserProfile);
userRouter.get(_routes["default"].changePassword, _middlewares.onlyPrivate, _userController.getChagePassword);
userRouter.post(_routes["default"].changePassword, _middlewares.onlyPrivate, _userController.postChagePassword);
userRouter.get(_routes["default"].userDetail(), _userController.userDetail);
var _default = userRouter;
exports["default"] = _default;
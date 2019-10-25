"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//total url list
//global
var HOME = "/";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout";
var SEARCH = "/search"; //users

var USER = "/user";
var USER_DETAIL = "/:id";
var USER_PROFILE = "/edit-profile";
var CHANGE_PASSWORD = "/change-password";
var ME = "/me"; //videos

var VIDEO = "/video";
var VIDEO_UPLORD = "/upload";
var VIDEO_DETAIL = "/:id";
var VIDEO_EDIT = "/:id/edit";
var VIDEO_DELETE = "/:id/delete"; //github

var GITHUB = "/auth/github";
var GITHUB_CALLBACK = "/auth/github/callback"; //kakao

var KAKAO = "/kakao";
var KAKAO_CALLBACK = "/oauth"; //api

var API = "/api";
var REGISTER_VIEW = "/:id/view";
var ADD_COMMENT = "/:id/comment";
var DEL_COMMENT = "/:id/comment/delete";
var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  user: USER,
  userDetail: function userDetail(id) {
    if (id) {
      return "/user/".concat(id);
    } else {
      return USER_DETAIL;
    }
  },
  userProfile: USER_PROFILE,
  me: ME,
  changePassword: CHANGE_PASSWORD,
  video: VIDEO,
  upload: VIDEO_UPLORD,
  videoDetail: function videoDetail(id) {
    if (id) {
      return "/video/".concat(id);
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: function editVideo(id) {
    if (id) {
      return "/video/".concat(id, "/edit");
    } else {
      return VIDEO_EDIT;
    }
  },
  deleteVideo: function deleteVideo(id) {
    if (id) {
      return "/video/".concat(id, "/delete");
    } else {
      return VIDEO_DELETE;
    }
  },
  github: GITHUB,
  githubcallback: GITHUB_CALLBACK,
  kakao: KAKAO,
  kakaocallback: KAKAO_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  delComment: DEL_COMMENT
};
var _default = routes;
exports["default"] = _default;
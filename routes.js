//total url list

//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//users
const USER = "/user";
const USER_DETAIL = "/:id";
const USER_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

//videos
const VIDEO = "/video";
const VIDEO_UPLORD = "/upload";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

//github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

//api
const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment";
const DEL_COMMENT = "/:id/comment/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  user: USER,
  userDetail: id => {
    if (id) {
      return `/user/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  userProfile: USER_PROFILE,
  me: ME,
  changePassword: CHANGE_PASSWORD,
  video: VIDEO,
  upload: VIDEO_UPLORD,
  videoDetail: id => {
    if (id) {
      return `/video/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: id => {
    if (id) {
      return `/video/${id}/edit`;
    } else {
      return VIDEO_EDIT;
    }
  },
  deleteVideo: id => {
    if (id) {
      return `/video/${id}/delete`;
    } else {
      return VIDEO_DELETE;
    }
  },
  github: GITHUB,
  githubcallback: GITHUB_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  delComment: DEL_COMMENT
};

export default routes;

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

//videos
const VIDEO = "/video";
const VIDEO_UPLORD = "/upload";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

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
  editVideo: VIDEO_EDIT,
  deleteVideo: VIDEO_DELETE
};

export default routes;

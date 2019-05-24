import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // to do : register user, log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //to do : process logout
  res.redirect(routes.home);
};
export const user = (req, res) => res.render("user", { pageTitle: "User" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User_Detail" });
export const userProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "User_Profile" });
export const chagePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change_Password" });

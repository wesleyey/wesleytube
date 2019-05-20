export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const user = (req, res) => res.render("user", { pageTitle: "User" });
export const userDetail = (req, res) =>
  res.render("useDetail", { pageTitle: "User_Detail" });
export const userProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "User_Profile" });
export const chagePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change_Password" });

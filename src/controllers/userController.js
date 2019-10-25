import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      //console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl: avatar_url
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = async (_, __, profile, done) => {
  const {
    _json: { id, properties: { profile_image, nickname }, kakao_account: { email } }
  } = profile;
  //console.log(profile);
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.kakaoId = id;
      user.save();
      return done(null, user);
    }
    const newUser = await User.create({
      email,
      name: nickname,
      kakaoId: id,
      avatarUrl: profile_image
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
}

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
}

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
export const user = (req, res) => res.render("user", { pageTitle: "User" });

export const me = (req, res) => {
  res.render("userDetail", { pageTitle: "User_Detail", user: req.user });
};
export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id).populate("videos");
    //console.log(user);
    res.render("userDetail", { pageTitle: "User_Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getUserProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "User_Profile" });

export const postUserProfile = async (req, res) => {
  const {
    body: { name, email },
    file
  } = req;
  //console.log(req.user);
  try {
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.location : req.user.avatarUrl
    });
    res.redirect(routes.me);
  } catch (error) {
    res.redirect(routes.userProfile);
  }
};

export const getChagePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change_Password" });

export const postChagePassword = async (req, res) => {
  const {
    body: { password, password1, password2 }
  } = req;
  try {
    if (password1 !== password2) {
      res.status(400);
      res.redirect(`/user${routes.changePassword}`);
      return;
    }
    await req.user.changePassword(password, password1);
    res.redirect(routes.me);
  } catch (error) {
    res.status(400);
    res.redirect(`/user${routes.changePassword}`);
  }
};

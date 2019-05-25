import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  //const searchKeyword = req.query.keyword;
  const {
    query: { keyword: searchKeyword }
  } = req;
  res.render("search", { pageTitle: "Search", searchKeyword, videos });
};

export const video = (req, res) => res.render("video", { pageTitle: "Video" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //to do : upload and save video
  res.redirect(routes.videoDetail(245686));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video_Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit_Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

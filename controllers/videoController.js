import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    res.render("home", { pageTitle: "Home", videos: [] });
  }
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

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  //to do : upload and save video
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video_Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit_Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

import express from "express";
import routes from "../routes";
import {
  video,
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.video, video);
//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
//video detail
videoRouter.get(routes.videoDetail(), videoDetail);
//edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
//delete video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

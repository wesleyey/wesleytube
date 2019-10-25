import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.PRODUCTION ? process.env.MONGO_URL : process.env.MONGO_URL_LOCAL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  });

const db = mongoose.connection;

const handleOpen = () => console.log("connected to DB");
const handleError = () => console.log("error on DB connection");

db.once("open", handleOpen);
db.on("error", handleError);

import "./models/Video";
import "./models/Comment";
import "./db";
import dotenv from "dotenv";
import app from "./app";
dotenv.config();

//const PORT = process.env.PORT;
const { PORT } = process.env;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);

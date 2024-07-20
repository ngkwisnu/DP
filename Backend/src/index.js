import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import http from "http";
import UserRoute from "./Routes/UserRoute.js";
import KategoriRoute from "./Routes/KategoriRoute.js";
import CeritaRoute from "./Routes/CeritaRoute.js";
import LikeRoute from "./Routes/LikeRoute.js";
import FavoriteRoute from "./Routes/FavoriteRoute.js";
import SearchRouter from "./Routes/SearchRoute.js";
import logRequest from "./Middleware/log.js";
import https from "https";
import fs from "fs";

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(logRequest);
app.use(express.json());
app.use(cookieParser());

const server = http.createServer(app);
app.use(
  UserRoute,
  KategoriRoute,
  CeritaRoute,
  LikeRoute,
  FavoriteRoute,
  SearchRouter
);

app.get("/", (req, res) => {
  console.log("Hello");
});

const options = {
  key: fs.readFileSync("../../server.key"),
  cert: fs.readFileSync("../../server.cert"),
};

https.createServer(options, app).listen(PORT, HOST, () => {
  console.log(`Server berjalan pada https://${HOST}:${PORT}`);
});

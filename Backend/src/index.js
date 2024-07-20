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
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();
app.use(
  cors({
    origin: "https://dongeng-pustaka.vercel.app",
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
  key: fs.readFileSync(path.resolve(__dirname, "../server.key")),
  cert: fs.readFileSync(path.resolve(__dirname, "../server.cert")),
};

https.createServer(options, app).listen(PORT, HOST, () => {
  console.log(`Server berjalan pada https://${HOST}:${PORT}`);
});

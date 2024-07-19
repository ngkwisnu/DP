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

const PORT = process.env.PORT;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
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

server.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});

import express from "express";
import {
  createFavoriteController,
  deleteFavoriteController,
  getAllFavoriteController,
  getFavoriteByIdController,
  updateFavoriteController,
} from "../Controller/FavoriteController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();
router.get("/favorites", protect, getAllFavoriteController);
router.get("/favorites/:id", protect, getFavoriteByIdController);
router.post("/favorites", protect, createFavoriteController);
router.put("/favorites/:id", protect, updateFavoriteController);
router.delete("/favorites/:id", protect, deleteFavoriteController);

export default router;

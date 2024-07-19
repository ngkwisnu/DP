import express from "express";
import {
  createLikeController,
  deleteLikeController,
  getAllLikeController,
  getLikeByIdController,
  updateLikeController,
} from "../Controller/LikeController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();
router.get("/likes", protect, getAllLikeController);
router.get("/likes/:id", protect, getLikeByIdController);
router.post("/likes", protect, createLikeController);
router.put("/likes/:id", protect, updateLikeController);
router.delete("/likes/:id", protect, deleteLikeController);

export default router;

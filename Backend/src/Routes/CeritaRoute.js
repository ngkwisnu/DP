import express from "express";
import {
  getAllCeritasController,
  getCeritaById,
  createCeritaController,
  updateCeritaController,
  deleteCeritaController,
} from "../Controller/CeritaController.js";

const router = express.Router();
router.get("/ceritas", getAllCeritasController);
router.get("/ceritas/:id", getCeritaById);
router.post("/ceritas", createCeritaController);
router.put("/ceritas/:id", updateCeritaController);
router.delete("/ceritas/:id", deleteCeritaController);

export default router;

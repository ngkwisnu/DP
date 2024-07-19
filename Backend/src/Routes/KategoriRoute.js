import express from "express";
import {
  createKategoriController,
  deleteKategoriController,
  getAllKategorisController,
  getKategorisById,
  updateKategoriController,
} from "../Controller/KategoriController.js";

const router = express.Router();
router.get("/kategoris", getAllKategorisController);
router.get("/kategoris/:id", getKategorisById);
router.post("/kategoris", createKategoriController);
router.put("/kategoris/:id", updateKategoriController);
router.delete("/kategoris/:id", deleteKategoriController);

export default router;

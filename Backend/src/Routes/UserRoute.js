import express from "express";
import {
  getAllUsersController,
  getUsersById,
  registerUser,
  loginUser,
  logoutUser,
  loginStatus,
} from "../Controller/UserController.js";

const router = express.Router();
router.get("/users", getAllUsersController);
router.get("/users/:id", getUsersById);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/login-status", loginStatus);

export default router;

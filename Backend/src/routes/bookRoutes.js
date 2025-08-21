import express from "express";
import { createBook } from "../controllers/bookControllers.js";
import { isAdmin, authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, createBook);

export default router;
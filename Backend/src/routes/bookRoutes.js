import express from "express";
import { createBook, getAllBooks } from "../controllers/bookControllers.js";
import { isAdmin, authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, createBook);
router.get("/getAll", authMiddleware, getAllBooks);

export default router;
import express from "express";
import { createBook, getAllBooks, getBookById, updateBook } from "../controllers/bookControllers.js";
import { isAdmin, authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, createBook);
router.get("/getAll", authMiddleware, getAllBooks);
router.get("/get/:id", authMiddleware, getBookById);
router.put("/update/:id", authMiddleware, isAdmin, updateBook);

export default router;
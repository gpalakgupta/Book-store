import express from "express";
import { createOrder } from "../controllers/orderControllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addOrder",authMiddleware, createOrder);

export default router;

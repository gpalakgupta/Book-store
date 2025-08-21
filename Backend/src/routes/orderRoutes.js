import express from "express";
import { createOrder, getMyOrder } from "../controllers/orderControllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addOrder", authMiddleware, createOrder);
router.get("/myOrders", authMiddleware, getMyOrder);

export default router;

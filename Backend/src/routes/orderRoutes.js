import express from "express";
import { createOrder, getMyOrder, getAllOrders } from "../controllers/orderControllers.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addOrder", authMiddleware, createOrder);
router.get("/myOrders", authMiddleware, getMyOrder);
router.get("/allOrders", authMiddleware, isAdmin, getAllOrders);


export default router;

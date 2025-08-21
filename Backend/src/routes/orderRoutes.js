import express from "express";
import { createOrder, getMyOrder, getAllOrders, updateOrder } from "../controllers/orderControllers.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addOrder", authMiddleware, createOrder);
router.get("/myOrders", authMiddleware, getMyOrder);
router.get("/allOrders", authMiddleware, isAdmin, getAllOrders);
router.put("/updateOrder/:orderId", authMiddleware, updateOrder);


export default router;

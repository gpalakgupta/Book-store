import express from "express";
import { createOrder, getMyOrder, getAllOrders, updateOrder, deleteOrder } from "../controllers/orderControllers.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addOrder", authMiddleware, createOrder);
router.get("/myOrders", authMiddleware, getMyOrder);
router.get("/allOrders", authMiddleware, isAdmin, getAllOrders);
router.put("/updateOrder/:orderId", authMiddleware, updateOrder);
router.delete("/deleteOrder/:orderId", authMiddleware, deleteOrder);


export default router;

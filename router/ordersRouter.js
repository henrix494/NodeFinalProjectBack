import express from "express";
import orders from "../dal/models/orders.js";
import { ordersController } from "../controllers/ordersController.js";
const router = express.Router();

router.get("/", ordersController.getAllOrders);
router.get("/getWaiterById/:id", ordersController.getOrderById);
router.delete("/deleteWaiterById/:id", ordersController.deleteOrderById);
router.post("/addOrderToTable", ordersController.addOrder);

export default router;

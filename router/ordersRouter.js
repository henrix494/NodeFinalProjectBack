import express from "express";
import orders from "../dal/models/orders.js";
import { ordersController } from "../controllers/ordersController.js";
const router = express.Router();

router.get("/orders", ordersController.getAllOrders);
router.get("/getWaiterById/:id", ordersController.getOrderById);
router.delete("/deleteWaiterById/:id", ordersController.deleteOrderById);
router.post("/endOrder/:id", ordersController.endOrder);
router.post("/addOrderToTable/:id", ordersController.addOrder);
router.post("/startOrder/:id", ordersController.startOrder);
export default router;

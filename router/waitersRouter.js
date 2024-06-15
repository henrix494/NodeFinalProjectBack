import express from "express";
import waiters from "../dal/models/waiters.js";
import { waitersController } from "../controllers/waitersController.js";
const router = express.Router();

router.post("/AddTableToWaiter", waitersController.addWaiterToTable);
router.get("/", waitersController.getAllWaiters);
router.get("/getWaiterById/:id", waitersController.getWaiterById);
router.delete("/deleteWaiterById/:id", waitersController.deleteWaiterById);
router.post("/addWaiter", waitersController.addWaiter);

export default router;

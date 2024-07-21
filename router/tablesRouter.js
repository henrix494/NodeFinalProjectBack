import express from "express";
import tables from "../dal/models/tables.js";
import { tablesController } from "../controllers/tablesController.js";
const router = express.Router();

router.get("/", tablesController.getAllTables);
router.get("/getTableById/:id", tablesController.getTableById);
router.delete("/deleTableById/:id", tablesController.deleteTableById);
router.post("/addTable", tablesController.addTable);
router.post("/makeTableAvailable", tablesController.makeTableAvailable);
export default router;

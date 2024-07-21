import express from "express";
import { mealsController } from "../controllers/mealsController.js";
const router = express.Router();
router.get("/", mealsController.getAllMeals);
router.get("/getMealbyId/:id", mealsController.getMealById);
router.post("/addMealToOrder/:id", mealsController.addMealToOrder);
router.post("/addMeal/:name", mealsController.addMeal);
router.delete("/deleteMealById/:id", mealsController.deleteMealById);
export default router;

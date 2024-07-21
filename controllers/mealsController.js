import express from "express";
import { mealServices } from "../services/mealServices.js";
import { mealOrder } from "../dal/models/MealOrder.js";
export const mealsController = {
  addMealToOrder: async (req, res) => {
    async (req, res) => {
      const { mealId, orderId } = await req.body;
      try {
        const addMeal = await mealServices.addMealToOrder(mealId, orderId);
        console.log(addMeal);
        return res
          .status(201)
          .json(`Meal ${mealId} added to order: ${orderId}`);
      } catch (error) {
        console.log(error);
        res.status(400).json(`Error updating order ${orderId} `);
      }
    };
  },
  getAllMeals: async (req, res) => {
    try {
      const meals = await mealServices.getAllMeals();
      return res.json(meals);
    } catch (error) {
      console.log(error);
    }
  },
  getMealById: async (req, res) => {
    const id = req.params.id;
    try {
      const mealId = await mealServices.getMealById(id);
      return res.json(mealId);
    } catch (error) {
      console.log(error);
    }
  },
  addMeal: async (req, res) => {
    const mealName = req.params.name;
    try {
      const addedMeal = await mealServices.addMeal(mealName);
      res.json(`${addedMeal.dataValues.mealName} was added succesfully!`);
    } catch (error) {
      console.log(error);
      res.json(`${addedMeal.dataValues.mealName} could not be added.`);
    }
  },
  deleteMealById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedMeal = await mealServices.deleteMealById(id);
      res.json(deletedMeal);
    } catch (error) {
      res.json(`Meal could not be deleted.`);
    }
  },
};

import express from "express";
import mealOrder from "../dal/models/MealOrder.js";
import orders from "../dal/models/orders.js";
import meals from "../dal/models/meals.js";
import sequelize from "../dal/db.js";
const router = express.Router();

const addMealToOr = async (req, res) => {
  try {
    const { items, oId } = req.body;

    const order = await orders.findByPk(oId);
    if (!order) {
      return res.status(404).send("Order not found");
    }

    for (const item of items) {
      const existingEntry = await mealOrder.findOne({
        where: {
          orderId: oId,
          mealId: item.id,
        },
      });

      if (existingEntry) {
        await existingEntry.update({
          count: existingEntry.count + item.count,
        });
      } else {
        await mealOrder.create({
          orderId: oId,
          mealId: item.id,
          count: item.count,
        });
      }
    }

    res.status(200).send("Meals added to order successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding meals to the order");
  }
};

const seeCurrentOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const findOrder = await orders.findOne({
      where: { id: id },
      include: {
        model: meals,
        through: {
          attributes: ["count"],
        },
      },
    });

    if (!findOrder) {
      return res.status(404).send("Order not found");
    }

    res.status(200).json(findOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving the order");
  }
};
const seeMostSold = async (req, res) => {
  try {
    const findMeals = await mealOrder.findAll({
      attributes: [
        "mealId",
        [sequelize.fn("SUM", sequelize.col("count")), "totalSold"],
      ],
      group: ["mealId"],
      order: [[sequelize.fn("SUM", sequelize.col("count")), "DESC"]],

      limit: 1,
    });

    if (findMeals.length === 0) {
      return res.status(404).send("No meals found");
    }
    const mostSoldDish = await meals.findOne({
      where: { id: findMeals[0].dataValues.mealId },
    });
    res.status(200).json(mostSoldDish);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while retrieving the most sold meal");
  }
};
router.post("/addMealToOR", addMealToOr);
router.get("/findMealToOR/:id", seeCurrentOrder);
router.get("/proftMeal", seeMostSold);

export default router;

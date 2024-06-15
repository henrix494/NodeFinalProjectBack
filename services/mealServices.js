import meals from "../dal/models/meals.js";
import orders from "../dal/models/orders.js";

export const mealServices = {
  getAllMeals: async () => {
    try {
      const { count, rows } = await meals.findAndCountAll();
      return { count, rows };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getMealById: async (id) => {
    try {
      const mealid = await meals.findOne({ where: { id: id } });
      const meal = await meals.findOne({
        where: { mealName: mealid.dataValues.mealName },
      });
      console.log(waiter);
      return waiter;
    } catch (error) {
      return console.log(`Could not find waiter ${id}`);
    }
  },
  addMealToOrder: async (mealId, orderId) => {
    try {
      const addMealToOrder = await meals.update(
        {
          orderId: orderId,
        },
        { where: { id: mealId } }
      );

      return addMealToOrder;
    } catch (error) {
      console.log(error);
    }
  },
  deleteMealById: async (id) => {
    const deletedMeal = await meals.destroy({ where: { id: id } });
    return `Meal ${deletedMeal.dataValues.mealName} was deleted from menu successfully!`;
  },
  deleteFromTable: async (orderId, mealId) => {
    const deletedMeal = await orders.destroy({
      where: { orderId: orderId },
      where: {},
    });
  },
};

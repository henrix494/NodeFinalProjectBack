import sequelize from "../db.js";
import { DataTypes } from "sequelize";
import meals from "./meals.js";
import orders from "./orders.js";

export const mealOrder = sequelize.define(
  "mealOrder",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

meals.belongsToMany(orders, { through: mealOrder });
orders.belongsToMany(meals, { through: mealOrder });

export default mealOrder;

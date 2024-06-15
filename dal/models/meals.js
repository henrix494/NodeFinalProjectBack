import sequelize from "../db.js";
import { Sequelize, DataTypes } from "sequelize";

const meals = sequelize.define(
  "meals",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    meal_name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
  },
  { timestamps: false }
);

export default meals;

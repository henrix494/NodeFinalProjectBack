import sequelize from "../db.js";
import { Sequelize, DataTypes } from "sequelize";
import meals from "./meals.js";

const orders = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  { timestamps: false }
);

orders.hasMany(meals);
export default orders;

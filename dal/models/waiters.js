import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const waiters = sequelize.define(
  "waiters",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    waiterName: {
      type: DataTypes.CHAR,
    },
  },
  { timestamps: false }
);

export default waiters;

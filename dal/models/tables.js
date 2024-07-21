import sequelize from "../db.js";
import { DataTypes } from "sequelize";
import orders from "./orders.js";

const tables = sequelize.define(
  "tables",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
  }
);

// Define the association
tables.hasOne(orders, { foreignKey: "tableId" });
orders.belongsTo(tables, { foreignKey: "tableId" });

export default tables;

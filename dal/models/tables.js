import sequelize from "../db.js";
import { DataTypes } from "sequelize";

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

export default tables;

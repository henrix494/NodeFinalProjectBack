import sequelize from "../db.js";
import { DataTypes } from "sequelize";
import tables from "./tables.js";
import waiters from "./waiters.js";

const TableWaiter = sequelize.define(
  "TableWaiter",
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

tables.belongsToMany(waiters, { through: TableWaiter });
waiters.belongsToMany(tables, { through: TableWaiter });

export default TableWaiter;

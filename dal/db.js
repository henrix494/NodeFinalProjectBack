import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("restauranti", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;

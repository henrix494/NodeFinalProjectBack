import { Sequelize, DataTypes } from "sequelize";
import mysql2 from "mysql2"; // Needed to fix sequelize issues with WebPack
const sequelize = new Sequelize("restauranti", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
  logging: false,
});

export default sequelize;

import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "../.env",
  });
}

import { Sequelize } from "sequelize";
import { devConfig } from "./configDev.js";

const config =
  process.env.NODE_ENV === "production"
    ? process.env.POSTGRES_PRISMA_URL
    : devConfig;

const sequelize = new Sequelize(config);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;

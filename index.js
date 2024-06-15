import dotenv from "dotenv";
import express from "express";
import sequelize from "./dal/db.js";
import models from "./dal/models/models.js";
import {} from "./router/tablesRouter.js";
import tablesRouter from "./router/tablesRouter.js";
import waitersRouter from "./router/waitersRouter.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: ".env",
  });
}

app.use(bodyParser.json());
app.use("/tables", tablesRouter);
app.use("/waiters", waitersRouter);
const port = 3000;

app.listen(port, () => {
  console.log(`App is open on Port: ${port}`);
});
app.get("/", (req, res) => res.send("Express on Vercel"));
sequelize.sync({ force: true }).then(() => {
  console.log("Database synchronized");
});

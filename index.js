import dotenv from "dotenv";
import express from "express";
import sequelize from "./dal/db.js";
import models from "./dal/models/models.js";
import {} from "./router/tablesRouter.js";
import tablesRouter from "./router/tablesRouter.js";
import waitersRouter from "./router/waitersRouter.js";
import mealsRouter from "./router/mealsRouter.js";
import bodyParser from "body-parser";
import orderRouter from "./router/ordersRouter.js";
import mealTOOR from "./router/mealOrderRouter.js";
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
app.use("/meals", mealsRouter);
app.use("/orders", orderRouter);
app.use("/mealTOOR", mealTOOR);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is open on Port: ${port}`);
});
app.get("/", (req, res) => res.send("Express on Vercel"));
sequelize.sync({ alter: true }).then(() => {
  console.log("Database synchronized");
});

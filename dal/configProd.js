import * as tedious from "tedious";

export const ProdConfig = {
  host: process.env.DB_HOST,
  dialect: "mysql",
  username: process.env.POSTGRES_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialectModule: tedious,
  dialectOptions: {
    encrypt: true,
    options: {
      requestTimeout: 300000,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 45000,
    idle: 10000,
  },
};

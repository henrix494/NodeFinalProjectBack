export const devConfig = {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  port: 3306,
  username: "root",
  password: "root",
  database: "restauranti",
  dialectOptions: {
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

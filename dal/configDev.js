export const devConfig = {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  username: "root",
  password: "root",
  database: "restauranti",
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

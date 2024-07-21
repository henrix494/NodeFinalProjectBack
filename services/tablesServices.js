import { where } from "sequelize";
import tables from "../dal/models/tables.js";
import waiters from "../dal/models/waiters.js";
import orders from "../dal/models/orders.js";
export const tableServices = {
  getAllTables: async () => {
    try {
      const { count, rows } = await tables.findAndCountAll({});
      return { count, rows };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getTableById: async (id) => {
    try {
      const table = await tables.findOne({
        where: { id: id },
        include: [
          { model: orders }, // Include the orders association
          "waiters", // Include the waiters association if it exists
        ],
      });

      return table;
    } catch (error) {
      console.log(error);
      return null; // Return null in case of an error
    }
  },
  addTable: async () => {
    try {
      const addedTable = await tables.create();
      return addedTable;
    } catch (error) {
      console.log(error);
    }
  },
  deleteTableById: async (del) => {
    const deletedTable = await tables.destroy({ where: { id: del } });
    return `Table ${deletedTable} was deleted successfully!`;
  },
  makeAVL: async (AVLID) => {
    try {
      const makeAVL = await tables.update(
        {
          availability: true,
        },
        { where: { id: AVLID } }
      );
      return `Table ${makeAVL} was made AVL!`;
    } catch (error) {
      console.log(error);
    }
  },
};

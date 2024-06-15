import tables from "../dal/models/tables.js";
import waiters from "../dal/models/waiters.js";

export const tableServices = {
  getAllTables: async () => {
    try {
      const { count, rows } = await tables.findAndCountAll();
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
        include: ["waiters"],
      });

      return table;
    } catch (error) {
      return console.log(error);
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
};

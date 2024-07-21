import { tableServices } from "../services/tablesServices.js";
export const tablesController = {
  getAllTables: async (req, res) => {
    try {
      const numberOfTables = await tableServices.getAllTables();
      return res.json(numberOfTables);
    } catch (error) {
      console.log(error);
    }
  },
  getTableById: async (req, res) => {
    try {
      const { id } = req.params;

      const table = await tableServices.getTableById(id);
      return res.json(table);
    } catch (error) {
      console.log(error);
    }
  },
  addTable: async (req, res) => {
    try {
      const addedTable = await tableServices.addTable();
      res.json(`Table ${addedTable.dataValues.id} was added succesfully!`);
    } catch (error) {
      console.log(error);
      res.json(`Table could not be added.`);
    }
  },
  deleteTableById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedTable = await tableServices.deleteTableById(id);
      res.json(deletedTable);
    } catch (error) {
      res.json(`Table could not be deleted.`);
    }
  },
  makeTableAvailable: async (req, res) => {
    try {
      const { id } = req.params;
      const makeAVL = await tableServices.makeAVL(id);
      res.json(makeAVL);
    } catch (error) {
      console.log(error);
    }
  },
};

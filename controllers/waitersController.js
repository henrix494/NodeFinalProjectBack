import e from "express";
import { waiterServices } from "../services/waiterServices.js";

export const waitersController = {
  addWaiterToTable: async (req, res) => {
    const { waiterId, TableId } = await req.body;

    try {
      const addWaiter = await waiterServices.addTableToWaiter(
        waiterId,
        TableId
      );
      console.log(addWaiter);
      return res
        .status(201)
        .json(`Waiter ${waiterId} added to table: ${TableId}`);
    } catch (error) {
      console.log(error);
      res.status(400).json(`Error updating table ${TableId} `);
    }
  },
  getAllWaiters: async (req, res) => {
    try {
      const waiters = await waiterServices.getAllWaiters();
      console.log(waiters);
      return res.json(waiters);
    } catch (error) {
      console.log(error);
    }
  },
  getWaiterById: async (req, res) => {
    try {
      const { id } = req.params;
      const waiter = await waiterServices.getWaiterById(id);
      return res.json(waiter.dataValues.waiterName);
    } catch (error) {
      console.log(error);
    }
  },
  addWaiter: async (req, res) => {
    const { waiterName } = await req.body;
    console.log(waiterName);
    try {
      const addedWaiter = await waiterServices.addWaiter(waiterName);
      res.json(`Waiter ${waiterName} was added succesfully!`);
    } catch (error) {
      console.log(error);
      res.json(`Waiter could not be added.`);
    }
  },
  deleteWaiterById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedWaiter = await waiterServices.deleteWaiterById(id);
      res.json(`Waiter ${deletedWaiter.dataValues.waiterName} was removed.`);
    } catch (error) {
      res.json(`Table could not be deleted.`);
    }
  },
};

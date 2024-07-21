import waiters from "../dal/models/waiters.js";
import tables from "../dal/models/tables.js";
import TableWaiter from "../dal/models/tableWaiter.js";
export const waiterServices = {
  getAllWaiters: async () => {
    try {
      const { count, rows } = await waiters.findAndCountAll();
      return { count, rows };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getWaiterById: async (id) => {
    try {
      const waiter = await waiters.findOne({ where: { id: id } });
      console.log(waiter);
      return waiter;
    } catch (error) {
      return console.log(`Could not find waiter ${id}`);
    }
  },
  addTableToWaiter: async (waiterId, tableId) => {
    try {
      await TableWaiter.create({ waiterId, tableId });

      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  },
  deleteWaiterById: async (id) => {
    const deletedWaiter = await waiters.destroy({ where: { id: id } });
    return `Waiter ${deletedWaiter.dataValues.waiterName} was deleted successfully!`;
  },
  addWaiter: async (name) => {
    try {
      const addWaiter = await waiters.create({
        waiterName: name,
      });
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  },
  deleteFromJoinTable: async (tableId, waiterId) => {
    try {
      const delData = await TableWaiter.destroy({
        where: {
          tableId: tableId,
          waiterId: waiterId,
        },
      });
      const serachWaiter = await TableWaiter.findAll({
        where: {
          tableId: tableId,
        },
      });
      if (serachWaiter.length === 0) {
        const test = await tables.update(
          {
            availability: true,
          },
          { where: { id: tableId } }
        );
      }
      console.log(`${serachWaiter} hhh`);
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  },
};

import orders from "../dal/models/orders.js";
import tables from "../dal/models/tables.js";
export const orderServices = {
  getAllOrders: async () => {
    try {
      const { count, rows } = await orders.findAndCountAll();
      return { count, rows };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getOrderById: async (id) => {
    try {
      const order = await orders.findOne({
        where: { id: id },
        include: ["tables"],
      });

      return order;
    } catch (error) {
      return console.log(`Could not find table ${id}`);
    }
  },
  addOrder: async (id) => {
    try {
      const addedOrder = await orders.create({ tableId: id });
      return { success: true };
    } catch (error) {
      console.log(error);
    }
  },
  deleteOrderById: async (id) => {
    const deletedOrder = await orders.destroy({ where: { id: id } });
    return `Order ${deletedOrder} was deleted successfully!`;
  },
  startOrderToTable: async (id) => {
    const start = await orders.create({ tableId: id });
    const makeUnAvailable = await tables.update(
      {
        availability: false,
      },
      {
        where: { id: id },
      }
    );
    return `Order ${start} was deleted successfully!`;
  },
  endOrder: async (id) => {
    console.log(id);
    const order = await orders.update(
      { isDone: true },
      { where: { tableId: id } }
    );
    const upDateTable = await tables.update(
      {
        availability: true,
      },
      { where: { id: id } }
    );

    return `h`;
  },
};

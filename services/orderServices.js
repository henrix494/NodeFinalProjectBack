import orders from "../dal/models/orders.js";

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
  addOrder: async () => {
    try {
      const addedOrder = await orders.create();
      return addedOrder;
    } catch (error) {
      console.log(error);
    }
  },
  deleteOrderById: async (id) => {
    const deletedOrder = await order.destroy({ where: { id: id } });
    return `Order ${deletedOrder} was deleted successfully!`;
  },
};

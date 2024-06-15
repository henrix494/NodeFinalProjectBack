import express from "express";
import { orderServices } from "../services/orderServices.js";

export const ordersController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await orderServices.getAllOrders();
      return res.json(orders);
    } catch (error) {
      console.log(error);
    }
  },
  getOrderById: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await orderServices.getOrderById(id);
      return res.json(order);
    } catch (error) {
      console.log(error);
    }
  },
  addOrder: async (req, res) => {
    try {
      const addedOrder = await orderServices.addOrder();
      res.json(`Order ${addedOrder.dataValues.id} was added succesfully!`);
    } catch (error) {
      console.log(error);
      res.json(`Order could not be added.`);
    }
  },
  deleteOrderById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedOrder = await orderServices.deleteOrderById(id);
      res.json(`Order ${deletedOrder.dataValues.id} was removed.`);
    } catch (error) {
      res.json(`Order could not be deleted.`);
    }
  },
};

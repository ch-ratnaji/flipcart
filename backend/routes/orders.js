import express from "express";
import { addOrder, getAllOrders, getOrder } from "../data/order.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.json({ orders });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const order = await getOrder(req.params.id);
    res.json({ order });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newOrder = await addOrder(req.body.order);
    res.status(201).json({ message: "Order created!", order: newOrder });
  } catch (error) {
    next(error);
  }
});

export default router;

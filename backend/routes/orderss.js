// import fs from "node:fs/promises";
// import { Router } from "express";
// import { getAll, get } from "../data/mobile.js";


// const router = Router();

// router.post("/", async (req, res) => {
//   const orderData = req.body.order;

//   if (
//     !orderData ||
//     !orderData.items ||
//     orderData.items.length === 0
//   ) {
//     return res.status(400).json({ message: "Missing data." });
//   }

//   const { email, name, street, "postal-code": postalCode, city } = orderData.customer;

//   if (
//     !email || !email.includes("@") ||
//     !name || !name.trim() ||
//     !street || !street.trim() ||
//     !postalCode || !postalCode.trim() ||
//     !city || !city.trim()
//   ) {
//     return res.status(400).json({
//       message: "Missing data: Email, name, street, postal code or city is missing.",
//     });
//   }

//   const newOrder = {
//     ...orderData,
//     id: (Math.random() * 1000).toString(),
//   };
//   try {
//     const orders = await fs.readFile("./data/orders.json", "utf8");
//     const allOrders = JSON.parse(orders);
//     allOrders.push(newOrder);
//     await fs.writeFile("./data/orders.json", JSON.stringify(allOrders));
//     res.status(201).json({ message: "Order created!" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to save order." });
//   }
// });

// export default router;

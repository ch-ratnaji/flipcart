import fs from "node:fs/promises";
import express from "express";
import mobileRoutes from "./routes/mobiles.js";
import orderRoutes from "./routes/orders.js";  // Import the new orders route file

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use("/mobiles", mobileRoutes);
app.use("/orders", orderRoutes);  // Use the new orders route file

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

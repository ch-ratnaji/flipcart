import fs from "node:fs/promises";
import path from "path";

// Define the path to the JSON file
const filePath = path.resolve("./backend/data/orders.json");

// Read data from the JSON file
export async function readOrders() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const parsedData = JSON.parse(data);
    return parsedData.orders || [];  // Return orders array or empty array if it doesn't exist
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If the file doesn't exist, return an empty array to start with
      return [];
    } else {
      throw new Error("Could not read the file: " + error.message);
    }
  }
}

// Write data to the JSON file
export async function writeOrders(orders) {
  try {
    const data = JSON.stringify({ orders: orders }, null, 2);
    await fs.writeFile(filePath, data, "utf8");
  } catch (error) {
    throw new Error("Could not write to the file: " + error.message);
  }
}

// Add a new order
export async function addOrder(orderData) {
  const orders = await readOrders();
  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  orders.push(newOrder);
  await writeOrders(orders);
  return newOrder;
}

// Get all orders
export async function getAllOrders() {
  return await readOrders();
}

// Get a single order by ID
export async function getOrder(id) {
  const orders = await readOrders();
  const order = orders.find(o => o.id === id);
  if (!order) {
    throw new Error("Order not found");
  }
  return order;
}

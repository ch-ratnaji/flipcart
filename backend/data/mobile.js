import fs from "node:fs/promises";
import path from "path";

// Define the path to the JSON file
const filePath = path.resolve("./data/available-mobiles.json");

// Read data from the JSON file
export async function readData() {
    try {
      const data = await fs.readFile(filePath, "utf8");
      const parsedData = JSON.parse(data);
      return parsedData.mobiles;
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`File not found: ${filePath}`);
      } else {
        throw new Error("Could not read the file: " + error.message);
      }
    }
  }
  

// Get all mobiles
export async function getAll() {
  const mobiles = await readData();
  return mobiles;
}

// Get a single mobile by ID
export async function get(id) {
  const mobiles = await getAll();
  const mobile = mobiles.find(m => m.id === id);
  if (!mobile) {
    throw new Error("Mobile not found");
  }
  return mobile;
}

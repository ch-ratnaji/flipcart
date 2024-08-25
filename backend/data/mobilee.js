// import { readFile, writeFile } from "node:fs/promises";

// import { NotFoundError } from "../util/errors.js";

// async function readData(file) {
//   const data = await readFile(file, "utf8");
//   return JSON.parse(data);
// }

// async function writeData(file, data) {
//   await writeFile(file, JSON.stringify(data, null, 2));
// }

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

// async function getAll() {
//   const storedData = await readData("available-mobiles.json");
//   if (!storedData.mobiles) {
//     throw new NotFoundError("Could not find any mobiles.");
//   }
//   return storedData.mobiles;
// }

// async function get(id) {
//   const storedData = await readData("available-mobiles.json");
//   if (!storedData.mobiles || storedData.mobiles.length === 0) {
//     throw new NotFoundError("Could not find any mobiles.");
//   }

//   const mobile = storedData.mobiles.find((ev) => ev.id === id);
//   if (!mobile) {
//     throw new NotFoundError("Could not find mobile for id " + id);
//   }

//   return mobile;
// }

// async function add(data) {
//   const storedData = await readData("orders.json");
//   storedData.mobiles.unshift({ ...data, id: generateId() });
//   await writeData(storedData);
// }

// async function replace(id, data) {
//   const storedData = await readData("orders.json");
//   if (!storedData.mobiles || storedData.mobiles.length === 0) {
//     throw new NotFoundError("Could not find any mobiles.");
//   }

//   const index = storedData.mobiles.findIndex((ev) => ev.id === id);
//   if (index < 0) {
//     throw new NotFoundError("Could not find event for id " + id);
//   }

//   storedData.mobiles[index] = { ...data, id };

//   await writeData(storedData);
// }

// async function remove(id) {
//   const storedData = await readData();
//   const updatedData = storedData.mobiles.filter((ev) => ev.id !== id);
//   await writeData({ mobiles: updatedData });
// }

// const _getAll = getAll;
// export { _getAll as getAll };
// const _get = get;
// export { _get as get };
// const _add = add;
// export { _add as add };
// const _replace = replace;
// export { _replace as replace };
// const _remove = remove;
// export { _remove as remove };

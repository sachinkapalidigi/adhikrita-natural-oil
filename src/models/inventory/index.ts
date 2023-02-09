import InventoryDB from "./inventory.mongo";
import { ISku } from "../../utils/ModelTypes";

async function addToInventory(productId: string, sku: ISku, quantity: number) {
  const addedInventory = await InventoryDB.findOneAndUpdate(
    {
      productId,
      "sku.name": sku.name,
    },
    {
      $inc: { quantity: quantity },
      $set: { productId, sku },
    },
    {
      projection: { __v: 0 },
      upsert: true,
      returnDocument: "after",
    }
  );
  return addedInventory;
}

async function removeFromInventory(
  productId: string,
  sku: ISku,
  quantity: number
) {
  await InventoryDB.findOneAndUpdate(
    { productId, "sku.name": sku.name },
    { $inc: { quantity: -1 * quantity } },
    {
      projection: { __v: 0 },
    }
  );
}

async function getInventory() {
  const inventory = await InventoryDB.find({});
  return inventory;
}

export { addToInventory, removeFromInventory, getInventory };

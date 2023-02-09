import InventoryDB from "./inventory.mongo";
import { ISku } from "../../utils/ModelTypes";
import { ClientSession } from "mongoose";

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
      returnDocument: "after",
      upsert: true,
    }
  );
  return addedInventory;
}

async function removeFromInventory(
  productId: string,
  sku: ISku,
  quantity: number,
  session?: ClientSession
) {
  const updated = await InventoryDB.findOneAndUpdate(
    { productId, "sku.name": sku.name },
    { $inc: { quantity: -1 * quantity } },
    {
      projection: { __v: 0 },
      runValidators: true, // NOTE: This is not working.
      session,
    }
  );
  if (!updated) {
    throw new Error("Inventory not found");
  }
}

async function getInventory() {
  const inventory = await InventoryDB.find({}, { __v: 0 }).lean();
  // .populate(
  //   "productId"
  // ); // simple if schema was correct
  return inventory;
}

export { addToInventory, removeFromInventory, getInventory };

import { Request, Response } from "express";
import { addToInventory, getInventory } from "../../models/inventory";
import { findByProductIdAndSku, getProduct } from "../../models/products";

async function httpAddToInventory(req: Request, res: Response) {
  try {
    const { productId, quantity, sku } = req.body;
    const product = await findByProductIdAndSku(productId, sku);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const addedInventory = await addToInventory(productId, sku, quantity);
    res.status(201).send(addedInventory);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function httpGetInventory(req: Request, res: Response) {
  try {
    const inventory = await getInventory();
    const inventoryWithProduct = await Promise.all(
      inventory.map(async (item) => {
        // Could have been avoided by using product instead of productId in schema
        const product = await getProduct(item.productId.toString());
        return {
          ...item,
          product,
        };
      })
    );
    res.status(200).send(inventoryWithProduct);
  } catch (error) {
    res.status(500).send(error);
  }
}

export { httpAddToInventory, httpGetInventory };

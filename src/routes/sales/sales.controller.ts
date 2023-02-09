import { Request, Response } from "express";
import { startSession } from "mongoose";
import { removeFromInventory } from "../../models/inventory";

import {
  createSale,
  getAllSales,
  getSale,
  updateSale,
} from "../../models/sales";
import { IProductRef } from "../../utils/ModelTypes";

async function httpCreateSale(req: Request, res: Response) {
  const session = await startSession();
  try {
    const reqBody = req.body;
    session.startTransaction();
    // Todo: transaction here, should reduce inventory size
    const sale = await createSale(reqBody);
    const { products } = reqBody;
    // Remove from inventory
    products.forEach((product: IProductRef) => {
      removeFromInventory(product.productId, product.sku, product.quantity);
    });
    session.commitTransaction();
    session.endSession();
    return res.status(201).json(sale);
  } catch (error) {
    session.abortTransaction();
    res.status(500).json({
      error,
    });
  }
}

async function httpUpdateSale(req: Request, res: Response) {
  try {
    const { params, body } = req;
    if (!params.id)
      return res.status(400).json({ error: "Sale ID is required" });
    const sale = await updateSale(params.id, body);
    return res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}

async function httpDeleteSale(req: Request, res: Response) {
  try {
    throw new Error("Not implemented");
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function httpGetSale(req: Request, res: Response) {
  try {
    const {
      params: { id },
    } = req;
    if (!id) return res.status(400).json({ error: "Sale ID is required" });
    const sale = await getSale(id);
    return res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}

async function httpGetSales(req: Request, res: Response) {
  try {
    // TODO: pagination, sorting, etc.
    const productions = await getAllSales();
    return res.status(200).json(productions);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}

export {
  httpCreateSale,
  httpUpdateSale,
  httpDeleteSale,
  httpGetSale,
  httpGetSales,
};

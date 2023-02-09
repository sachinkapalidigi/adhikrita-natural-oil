import { Request, Response } from "express";

import { removeFromInventory } from "../../models/inventory";
import { mongooseConnection } from "../../services/mongo";
import {
  createSale,
  getAllSales,
  getSale,
  updateSale,
} from "../../models/sales";
import { IProductRef } from "../../utils/ModelTypes";

async function httpCreateSale(req: Request, res: Response) {
  const session = await mongooseConnection.startSession();
  try {
    const reqBody = req.body;
    const { products, paymentDetails } = reqBody;
    await session.startTransaction();
    console.log("Starting transaction");
    // TODO: move to utils
    let totalAmount = 0;
    products.forEach((product: IProductRef) => {
      totalAmount += product.quantity * product.sku.price;
    });
    const discount = Math.max(0, totalAmount - paymentDetails.paidAmount);
    const sale = await createSale(
      {
        ...reqBody,
        paymentDetails: {
          ...paymentDetails,
          totalAmount,
          discount,
        },
      },
      session
    );
    // Remove from inventory
    await Promise.all(
      products.map(async (product: IProductRef) => {
        return await removeFromInventory(
          product.productId,
          product.sku,
          product.quantity,
          session
        );
      })
    );
    await session.commitTransaction();
    res.status(201).json(sale);
  } catch (err) {
    console.log("Aborting transaction");
    await session.abortTransaction();
    res.status(500).json({
      error: "Could not create sale",
    });
  } finally {
    console.log("Ending session of transaction");
    await session.endSession();
  }
}

async function httpUpdateSale(req: Request, res: Response) {
  try {
    const { params, body } = req;
    if (!params.id) {
      return res.status(400).json({ error: "Sale ID is required" });
    }
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

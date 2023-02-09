import { ISale } from "../../utils/ModelTypes";
import SalesDB from "./sales.mongo";

async function createSale(sale: ISale) {
  const salesDB = new SalesDB(sale);
  return await salesDB.save();
}

async function getSale(id: string) {
  return await SalesDB.findById(id, { __v: 0 });
}

async function getAllSales() {
  return await SalesDB.find({}, { __v: 0 });
}

async function updateSale(id: string, sale: ISale) {
  return await SalesDB.findByIdAndUpdate(id, sale, { __v: 0 });
}

export { createSale, getSale, getAllSales, updateSale };

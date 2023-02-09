import ProductionDB from "./production.mongo";
import { IProduction } from "../../utils/ModelTypes";

async function createProduction(production: IProduction) {
  const savedProduction = new ProductionDB(production);
  return await savedProduction.save();
}

async function getProduction(id: string) {
  return await ProductionDB.findById(id);
}

// TODO: pagination support, filter, sort
async function getProductions() {
  return await ProductionDB.find({}, { __v: 0 });
}

async function updateProduction(productionID: string, production: IProduction) {
  const updatedProduction = ProductionDB.findByIdAndUpdate(
    productionID,
    production,
    {
      returnDocument: "after",
      projection: { __v: 0 },
    }
  );
  return updatedProduction;
}

export { createProduction, getProduction, getProductions, updateProduction };

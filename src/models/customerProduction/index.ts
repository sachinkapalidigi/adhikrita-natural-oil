import { ICustomerProduction } from "../../utils/ModelTypes";
import CustomerProductionDB from "./customerProduction.mongo";

async function createCustomerProduction(
  customerProductionData: ICustomerProduction
) {
  const savedProduction = new CustomerProductionDB(customerProductionData);
  return await savedProduction.save();
}

// TODO: add filter, sort, pagination
async function getCustomerProductions() {
  return await CustomerProductionDB.find({});
}

async function getCustomerProduction(id: string) {
  return await CustomerProductionDB.findById(id);
}

async function updateCustomerProduction(
  id: string,
  customerProductionData: ICustomerProduction
) {
  return await CustomerProductionDB.findByIdAndUpdate(
    id,
    customerProductionData,
    {
      returnDocument: "after",
      projection: { __v: 0 },
    }
  );
}

async function deleteCustomerProduction(id: string) {
  throw new Error("CustomerProduction does not support deletion");
  return await CustomerProductionDB.findByIdAndDelete(id);
}

export {
  createCustomerProduction,
  getCustomerProduction,
  updateCustomerProduction,
  deleteCustomerProduction,
  getCustomerProductions,
};

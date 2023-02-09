import { Request, Response } from "express";
import {
  createCustomerProduction,
  deleteCustomerProduction,
  getCustomerProduction,
  getCustomerProductions,
  updateCustomerProduction,
} from "../../models/customerProduction";

async function httpCreteCustomerProduction(req: Request, res: Response) {
  try {
    const { body } = req;
    const customer = await createCustomerProduction(body);
    return res.status(201).json(customer);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function httpGetCustomerProductions(req: Request, res: Response) {
  try {
    // TODO: Add pagination support, sort by date, etc.
    const customers = await getCustomerProductions();
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function httpGetCustomerProduction(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const customer = await getCustomerProduction(id);
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function httpUpdateCustomerProduction(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { body } = req;
    const customer = await updateCustomerProduction(id, body);
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function httpDeleteCustomerProduction(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const customer = await deleteCustomerProduction(id);
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export {
  httpCreteCustomerProduction,
  httpGetCustomerProductions,
  httpGetCustomerProduction,
  httpUpdateCustomerProduction,
  httpDeleteCustomerProduction,
};

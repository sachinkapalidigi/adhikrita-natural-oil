import { Request, Response } from "express";
import {
  createProduction,
  getProduction,
  getProductions,
  updateProduction,
} from "../../models/production";

async function httpCreateProduction(req: Request, res: Response) {
  try {
    const reqBody = req.body;
    const production = await createProduction(reqBody);
    return res.status(201).json(production);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}

async function httpUpdateProduction(req: Request, res: Response) {
  try {
    const { params, body } = req;
    if (!params.id)
      return res.status(400).json({ error: "Production ID is required" });
    const production = await updateProduction(params.id, body);
    return res.status(200).json(production);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}

async function httpDeleteProduction(req: Request, res: Response) {
  try {
    throw new Error("Not implemented");
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function httpGetProduction(req: Request, res: Response) {
  try {
    const {
      params: { id },
    } = req;
    if (!id)
      return res.status(400).json({ error: "Production ID is required" });
    const production = await getProduction(id);
    return res.status(200).json(production);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}

async function httpGetProductions(req: Request, res: Response) {
  try {
    // TODO: pagination, sorting, etc.
    const productions = await getProductions();
    return res.status(200).json(productions);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}

export {
  httpCreateProduction,
  httpUpdateProduction,
  httpDeleteProduction,
  httpGetProduction,
  httpGetProductions,
};

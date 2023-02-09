import { Request, Response } from "express";

async function httpCreateProduction(req: Request, res: Response) {
  res.status(200).json({ message: "Production created" });
}

async function httpUpdateProduction(req: Request, res: Response) {
  res.status(200).json({ message: "Production updated" });
}

async function httpDeleteProduction(req: Request, res: Response) {
  try {
    throw new Error("Not implemented");
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function httpGetProduction(req: Request, res: Response) {
  res.status(200).json({ message: "Production retrieved" });
}

async function httpGetProductions(req: Request, res: Response) {
  res.status(200).json({ message: "Productions retrieved" });
}

export {
  httpCreateProduction,
  httpUpdateProduction,
  httpDeleteProduction,
  httpGetProduction,
  httpGetProductions,
};

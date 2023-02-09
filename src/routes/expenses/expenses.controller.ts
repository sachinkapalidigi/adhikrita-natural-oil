import { Request, Response } from "express";
import {
  createExpense,
  getExpense,
  updateExpense,
  getExpenses,
} from "../../models/expenses";

async function httpGetExpenses(req: Request, res: Response) {
  try {
    // TODO: add pagination, filter, sorting.
    const expenses = await getExpenses();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function httpGetExpense(req: Request, res: Response) {
  try {
    const expense = await getExpense(req.params.id);
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function httpCreateExpense(req: Request, res: Response) {
  try {
    const expense = await createExpense(req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function httpUpdateExpense(req: Request, res: Response) {
  try {
    const expense = await updateExpense(req.params.id, req.body);
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function httpDeleteExpense(req: Request, res: Response) {
  try {
    throw new Error("Not implemented");
    // const expense = await deleteExpense(req.params.id);
    // res.status(200).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
}

export {
  httpGetExpense,
  httpCreateExpense,
  httpUpdateExpense,
  httpDeleteExpense,
  httpGetExpenses,
};

import express from "express";

import requestValidator from "../../middlewares/requestValidator";
import {
  httpCreateExpense,
  httpDeleteExpense,
  httpGetExpense,
  httpGetExpenses,
  httpUpdateExpense,
} from "./expenses.controller";
import { ExpenseControllerSchema } from "./expenses.validation.schema";

const expensesRouter = express.Router();

expensesRouter.get("/", httpGetExpenses);

expensesRouter.post(
  "/",
  requestValidator(ExpenseControllerSchema.createExpenseSchema),
  httpCreateExpense
);

expensesRouter.get("/:id", httpGetExpense);

expensesRouter.put(
  "/:id",
  requestValidator(ExpenseControllerSchema.createExpenseSchema),
  httpUpdateExpense
);

expensesRouter.delete("/:id", httpDeleteExpense);

export default expensesRouter;

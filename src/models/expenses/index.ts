import { IExpense } from "../../utils/ModelTypes";
import ExpenseDB from "./expenses.mongo";

async function createExpense(expense: IExpense) {
  const newExpense = new ExpenseDB(Object.assign({}, expense));
  return await newExpense.save();
}

// TODO: expenses with pagination + from/to dates
// Check: Pagination with from/to dates. Total length between dates should not truncate.
async function getExpenses() {
  return await ExpenseDB.find({}, { __v: 0 });
}

async function getExpense(id: string) {
  return await ExpenseDB.findById(id, { __v: 0 });
}

async function updateExpense(expenseId: string, expense: IExpense) {
  const updatedExpense = await ExpenseDB.findByIdAndUpdate(expenseId, expense, {
    returnDocument: "after",
    projection: { __v: 0 },
  });

  return updatedExpense;
}

export { createExpense, updateExpense, getExpenses, getExpense };

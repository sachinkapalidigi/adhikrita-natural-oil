import ExpenseDB from "./expenses.mongo";

interface IExpense {
  date: Date;
  description: string;
  amount: number;
}

async function addExpense(expense: IExpense) {
  const newExpense = new ExpenseDB(Object.assign({}, expense));
  return await newExpense.save();
}

// TODO: expenses with pagination + from/to dates
// Check: Pagination with from/to dates. Total length between dates should not truncate.
async function getExpenses() {
  return await ExpenseDB.find({});
}

async function getExpense(id: string) {
  return await ExpenseDB.findById(id);
}

// Check: Does this update ID as well?
async function updateExpense(expenseId: string, expense: IExpense) {
  const updated = await ExpenseDB.updateOne(
    { _id: expenseId },
    Object.assign({}, expense)
  );
  return updated;
}

export { addExpense, updateExpense, getExpenses, getExpense };

import express from "express";
import customerProductionRouter from "./customerProduction/customerProduction.router";
import expensesRouter from "./expenses/expenses.router";
import productionRouter from "./production/production.router";

import productsRouter from "./products/products.router";

const api = express.Router();

api.use("/products", productsRouter);
api.use("/customer-productions", customerProductionRouter);
api.use("/expenses", expensesRouter);
api.use("/productions", productionRouter);

// Inventory APIs

// Sales APIs

// Users APIs

// Purchases API

export default api;

import express from "express";
import customerProductionRouter from "./customerProduction/customerProduction.router";
import expensesRouter from "./expenses/expenses.router";
import inventoryRouter from "./inventory/inventory.router";
import productionRouter from "./production/production.router";

import productsRouter from "./products/products.router";
import salesRouter from "./sales/sales.router";

const api = express.Router();

api.use("/products", productsRouter);
api.use("/customer-productions", customerProductionRouter);
api.use("/expenses", expensesRouter);
api.use("/productions", productionRouter);

// Inventory APIs
api.use("/inventory", inventoryRouter);
// Sales APIs
api.use("/sales", salesRouter);
// Users APIs

// Purchases API

export default api;

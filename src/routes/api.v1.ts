import express from "express";
import { authenticateToken } from "../middlewares/authValidator";
import authRouter from "./auth/auth.router";
import customerProductionRouter from "./customerProduction/customerProduction.router";
import expensesRouter from "./expenses/expenses.router";
import inventoryRouter from "./inventory/inventory.router";
import productionRouter from "./production/production.router";

import productsRouter from "./products/products.router";
import salesRouter from "./sales/sales.router";

const api = express.Router();

api.use("/auth", authRouter);

api.use("/products", authenticateToken, productsRouter);
api.use("/customer-productions", authenticateToken, customerProductionRouter);
api.use("/expenses", authenticateToken, expensesRouter);
api.use("/productions", authenticateToken, productionRouter);

// Inventory APIs
api.use("/inventory", authenticateToken, inventoryRouter);
// Sales APIs
api.use("/sales", authenticateToken, salesRouter);

// Purchases API

export default api;

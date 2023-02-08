import express from "express";

import productsApi from "./products/products.route";

const api = express.Router();

api.use("/products", productsApi);

export default api;

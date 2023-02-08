import { Request, Response } from "express";
import {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
} from "../../models/products";

async function httpAddProduct(req: Request, res: Response) {
  const product = req.body;
  try {
    const savedProduct = await addProduct(product);
    res.status(201).json({
      ...product,
      _id: savedProduct._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Couldnot add product" });
  }
}

async function httpGetProducts(req: Request, res: Response) {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Couldnot get products" });
  }
}

async function httpGetProduct(req: Request, res: Response) {
  const productId = req.params.id;
  if (!productId) {
    res.status(400).json({ message: "Product id is required" });
    return;
  }
  return await getProduct(productId);
}

async function httpUpdateProduct(req: Request, res: Response) {
  const productId = req.params.id;
  if (!productId) {
    res.status(400).json({ message: "Product id is required" });
    return;
  }
  const product = req.body;
  if (!product) {
    res.status(400).json({ message: "Product is required" });
    return;
  }
  try {
    const updatedProduct = await updateProduct(productId, product);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Couldnot get products" });
  }
}

export { httpAddProduct, httpGetProducts, httpGetProduct, httpUpdateProduct };

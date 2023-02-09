import { IProduct, ISku } from "../../utils/ModelTypes";
import ProductsDB from "./products.mongo";

async function addProduct(product: IProduct) {
  const products = new ProductsDB(Object.assign({}, product));
  return await products.save();
}

async function getProducts() {
  return await ProductsDB.find({}, { _v: 0 });
}

async function getProduct(productId: string) {
  return await ProductsDB.findById(productId);
}

async function updateProduct(productId: string, product: IProduct) {
  const savedProduct = await ProductsDB.findByIdAndUpdate(productId, product, {
    returnDocument: "after",
    projection: { __v: 0 },
  });

  return savedProduct;
}

async function findByProductIdAndSku(productId: string, sku: ISku) {
  return await ProductsDB.findOne({
    productId,
    skus: { $elemMatch: { name: sku.name } },
  });
}

export {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  findByProductIdAndSku,
};

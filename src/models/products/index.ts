import ProductsDB from "./products.mongo";

interface ISku {
  name: string;
  price: number;
  quantity: number;
}

interface IProduct {
  name: string;
  skus: ISku[];
  materials: string[];
}

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

export { addProduct, getProducts, getProduct, updateProduct };

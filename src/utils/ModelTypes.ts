export interface IExpense {
  date: Date;
  description: string;
  amount: number;
}

export interface ISku {
  name: string;
  price: number;
  quantity: number;
}

export interface IProduct {
  name: string;
  skus: ISku[];
  materials: string[];
}

export interface IPaymentInfo {
  totalAmount: number;
  currency: string;
  date: Date;
  paidAmount: number;
  paymentMethod: string;
  metadata?: object;
}

export interface ICustomerProduction {
  date: Date;
  material: string;
  quantity: number;
  unit?: string;
  paymentDetails: IPaymentInfo;
}

export interface IProduction {
  date: Date;
  material: string;
  inputQuantity: number;
  inputUnit?: string;
  outputQuantity: number;
  outputUnit?: string;
}

export interface ICustomerDetails {
  name?: string;
  email?: string;
  phone?: string;
  customerType: string;
}

export interface IProductRef {
  productId: string;
  sku: ISku;
  quantity: number;
}

export interface ISale {
  date: Date;
  products: IProductRef[];
  customer: ICustomerDetails;
  paymentDetails: IPaymentInfo;
}

export interface IInventory {
  productId: string;
  quantity: number;
  sku: ISku;
}

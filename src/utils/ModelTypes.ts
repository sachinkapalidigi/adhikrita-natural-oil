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

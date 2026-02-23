export interface IProductDto{
  productId: number;
  categoryId: number;
  productCode: string;
  productName: string;
  productDesc: string;
  productPrice: number;
  productQuantity: number;
  seedQuantity: number;
  germinationRate: number;
  numberDays: number;
  inStock: boolean;
  productImage: string;
}
import type { IProduct } from "./product";

export interface ICart {
    product: IProduct;
    quantity: number;
}
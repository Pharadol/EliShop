import { ProductAttributes } from "./Product";

export interface CartProduct {
  id: number;
  quantity: number;
  isSelected?: boolean;
  attributes: ProductAttributes;
}
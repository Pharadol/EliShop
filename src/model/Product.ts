import { Thumbnail } from "./Thumbnail";

export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface Tags {
  id: number;
  attributes: {
    title: string;
    key: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Category {
  data: {
    id: number;
    attributes: {
      title: string;
      key: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface ProductAttributes {
  name: string;
  price: number;
  discount?: number | null;
  slug?: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tags: {
    data: Tags[];
  };
  category: Category;
  thumbnail?: Thumbnail | null;
  description: any;
}

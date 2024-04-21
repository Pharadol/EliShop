import { Thumbnail } from "./Thumbnail";

export interface Product {
  id: number;
  attributes: {
    name: string;
    price: number;
    discount?: number | null;
    slug?: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    tag: Tag;
    categories: {
      data: Category[]
    }
    thumbnail?: Thumbnail | null
  };
}

export interface Tag {
  data: {
    id: number;
    attributes: {
      title: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface Category {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
}


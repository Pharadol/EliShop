import { Product } from "@/model/Product";

const getThumbUrl = (product: Product) => {
  // return `${process.env.API_URL}${product.attributes.thumbnail?.data?.attributes?.url}`; // dev 
  return `${product.attributes.thumbnail?.data?.attributes?.url}`; // prod
};
const getCategory = (product: Product) => {
  return product.attributes?.category?.data
    ? product.attributes.category.data.attributes.title
    : null;
};
const getTags = (product: Product) => {
  return product.attributes?.tags?.data ? product.attributes.tags.data : [];
};

export { getThumbUrl, getCategory, getTags };

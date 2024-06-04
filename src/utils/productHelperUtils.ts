import { Product } from "@/model/Product";
import { CartProduct } from "@/model/Cart";

const getThumbUrl = (product: Product | CartProduct) => {
  return `${process.env.API_URL}${product.attributes.thumbnail?.data?.attributes?.url}`; // dev 
  // return `${product.attributes.thumbnail?.data?.attributes?.url}`; // prod
};
const getCategory = (product: Product | CartProduct) => {
  return product.attributes?.category?.data
    ? product.attributes.category.data.attributes.title
    : null;
};
const getTags = (product: Product | CartProduct) => {
  return product.attributes?.tags?.data ? product.attributes.tags.data : [];
};
const getPrice = (product: Product | CartProduct) => {
  const discount = product.attributes.discount
  const price = discount
  ? product.attributes.price - discount
    : product.attributes.price;
  return price
}

export { getThumbUrl, getCategory, getTags, getPrice };
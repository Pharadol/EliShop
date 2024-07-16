import { Product } from "@/model/Product";
import { CartProduct } from "@/model/Cart";
import noImage  from '../assets/images/NoImage.jpg'

const getThumbUrl = (product: Product | CartProduct) => {
  const baseUrl = process.env.API_URL || "";
  const imageUrl = product.attributes.thumbnail?.data?.attributes?.url;

  // return !baseUrl || !imageUrl ? noImage : `${baseUrl}${imageUrl}` //dev
  // return !baseUrl || !imageUrl ? noImage : `${imageUrl}` // prod
  return imageUrl ? imageUrl : noImage;
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
import { Product } from "@/model/Product";

const getThumbUrl = (blog: Product) => {
  return `${blog.attributes.thumbnail?.data?.attributes?.url}`;
};
const getCategories = (blog: Product) => {
  return blog.attributes.categories.data;
};
const getTag = (blog: Product) => {
  return blog.attributes.tag.data.attributes.title;
};

export { getThumbUrl, getCategories, getTag };

import { Product } from "@/model/Product";

const getThumbUrl = (blog: Product) => {
  return `${process.env.API_URL}${blog.attributes.thumbnail?.data?.attributes?.url}`;
};
const getCategory = (blog: Product) => {
  return blog.attributes?.category?.data
    ? blog.attributes.category.data.attributes.title
    : null;
};
const getTags = (blog: Product) => {
  return blog.attributes?.tags?.data ? blog.attributes.tags.data : [];
};

export { getThumbUrl, getCategory, getTags };

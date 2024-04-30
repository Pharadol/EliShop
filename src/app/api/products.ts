import axios from "axios";
const BASE_API_URL = `${process.env.API_URL}/api`;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/products?populate=*`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching products", error);
    throw new Error("Failed to fetch products");
  }
};

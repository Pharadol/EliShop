import axios from "axios";
const BASE_API_URL = `${process.env.API_URL}/api`;

export const fetchProducts = async (id?: string) => {
  const queryURL = id ? `${BASE_API_URL}/products/${id}?populate=*` : `${BASE_API_URL}/products?populate=*`
  try {
    const response = await axios.get(queryURL);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching products", error);
    throw new Error("Failed to fetch products");
  }
};
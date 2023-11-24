import axios from "./instance";

export const getProducts = async (search) => {
  try {
    const res = await axios.get("/products");
    return res.data;
  } catch (error) {
    return [];
  }
};

export const getSingleProduct = async (id) => {
  try {
    const res = await axios.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    return null;
  }
};
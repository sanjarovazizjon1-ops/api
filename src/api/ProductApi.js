import { api } from "./api";

export async function getProduct(limit) {
  try {
    const response = await api.get(
      `/products?limit=${limit}&page=1`
    );

    return response.data;
  } catch (error) {
    console.error("GET /products xatosi", error);
    throw error;
  }
}

export async function getProducts(id) {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("GET /products xatosi", error);
    throw error;
  }
}

import { api } from "./api";

export async function getProduct(limit = 8, page = 1) {
  try {
    const response = await api.get(
      `/products?limit=${limit}&page=${page}`
    );

    return response.data;
  } catch (error) {
    console.error("GET /products xatosi:", error);
    throw error;
  }
}

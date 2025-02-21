import axios from "axios";
import { apiUrl } from "../constants/env";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addSpecialPrice = async (
  productId: number,
  specialPrice: number,
  collectionName: string
) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/api/products/specialPrices/${collectionName}`,
      { productId, specialPrice }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSpecialPrice = async (collectionName: string) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}/api/products/specialPrices/${collectionName}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

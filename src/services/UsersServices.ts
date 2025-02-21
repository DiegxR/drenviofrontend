import axios from "axios";
import { apiUrl } from "../constants/env";
export const getUserByEmail = async (email: string) => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/users/${email}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/users`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

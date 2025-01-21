import { apiUrl } from "./api";

export const apiCall = async (call, path, body) => {
  try {
    const res = await apiUrl[call](path, body);
    const { data } = res;
    
    return { data: data.data, message: data.message, status: res.status };
  } catch (err) {
    console.error("Error:", err);
  }
};

import axios from "axios";

export const apiUrl = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

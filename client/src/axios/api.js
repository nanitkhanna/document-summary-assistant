
import axios from "axios";

export const apiUrl = axios.create({
  baseURL: import.meta.env.SERVER_URL,
});

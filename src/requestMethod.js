import axios from "axios";

const BASE_URL = "https://miprueba-server-production.up.railway.app/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
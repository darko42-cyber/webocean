import axios from "axios";

const api = process.env.API_URL;
const axiosInstance = axios.create({
  baseURL: "https://webocean-api.onrender.com",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export default axiosInstance;

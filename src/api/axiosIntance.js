import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://webocean-api.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;

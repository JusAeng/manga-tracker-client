import axios from "axios";
import configEnv from "../config";

const axiosInstance = axios.create({
  baseURL: configEnv.API_BASE_URL,
});

export default axiosInstance;

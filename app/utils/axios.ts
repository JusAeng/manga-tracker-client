import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mgt-backend-deploy-spk23ljzqq-as.a.run.app",
});

export default axiosInstance;

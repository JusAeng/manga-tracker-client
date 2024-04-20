import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mgt-backend-deploy-spk23ljzqq-as.a.run.app",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjIwMTg2MDAsInJvbGUiOiJ1c2VyIiwidXNlcklkIjoiOGE5OTRiNzYyYzM4OGRhOTM0YWI0NzM2In0.FZHRYu06uBkpgn_pvkOmGLcFKVgGpxSlSdY1pBuTubo",
  },
});

export default axiosInstance;

// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  //   baseURL: "http://localhost:5001/api", // your backend base URL
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
});

// Attach token automatically if available
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;

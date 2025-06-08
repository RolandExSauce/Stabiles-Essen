import axios from "axios";
import { BASE_API_URL } from "../api/constants";

// import.meta.env.VITE_API_URL || 


//wrapper for axios for token injection and err handling 
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//token injection, automatically add JWT to headers
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // or from cookies/sessionStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

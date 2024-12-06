import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
  // baseURL: process?.env?.API_URL,
  baseURL: "http://localhost:7777",
  headers: {},
});

axiosInstance.interceptors.request.use((response) => {
  const token = localStorage.getItem("token");

  if (token) {
    response.headers.Authorization = "Bearer " + token;
  }

  return response;
});

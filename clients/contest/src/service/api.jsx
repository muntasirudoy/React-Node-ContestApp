import axios from "axios";

const api = axios.create({
  //   baseURL: process.env.REACT_APP_BASE_API_URL,
  baseURL: "https://bagis.ihyavakfi.org.tr/",
});

export default api;

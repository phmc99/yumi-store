import axios from "axios";

const api = axios.create({
  baseURL: "https://yumistoreapi.herokuapp.com/",
});

export default api;

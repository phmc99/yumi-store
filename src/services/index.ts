import axios from "axios";

const api = axios.create({
  baseURL: "https://yumistore.herokuapp.com/",
});

export default api;

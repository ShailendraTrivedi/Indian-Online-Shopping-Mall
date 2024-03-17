import axios from "axios";
import Cookies from "js-cookie";
import { REACT_APP_API_URL } from "./constant";

const api = axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true,
});
api.defaults.headers.common["Authorization"] = Cookies.get("token");
export default api;

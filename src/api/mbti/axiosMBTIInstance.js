import axios from "axios";

const BASEURL = import.meta.env.VITE_SERVER_URL;

const axiosMBTIInstance = axios.create({
  baseURL: `${BASEURL}/mbti`,
});

export default axiosMBTIInstance;

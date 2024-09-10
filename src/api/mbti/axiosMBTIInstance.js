import axios from "axios";

const axiosMBTIInstance = axios.create({
  baseURL: "http://localhost:4000/mbti",
});

export default axiosMBTIInstance;

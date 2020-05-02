import axios from "axios";

const instance = axios.create({
  baseURL: `https://mayoeru-api.herokuapp.com/api`,
  "Access-Control-Allow-Origin": "http://localhost:3000"
});

export default instance;

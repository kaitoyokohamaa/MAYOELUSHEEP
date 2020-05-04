import axios from "axios";

const instance = axios.create({
  baseURL: `https://mayoeru-api.herokuapp.com/api`
});

export default instance;

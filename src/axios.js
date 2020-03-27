import axios from "axios";
let proxy = "http://cors-anywhere.herokuapp.com/";
const instance = axios.create({
  baseURL: `${proxy}https://mayoeru-sheep.herokuapp.com/api/v1/`
});

export default instance;

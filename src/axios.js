import axios from "axios";

const instance = axios.create({
  baseURL: "https://teachapi.herokuapp.com/"
});

export default instance;

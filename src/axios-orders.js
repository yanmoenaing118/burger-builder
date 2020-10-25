import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-6d1c6.firebaseio.com/",
});

export default instance;

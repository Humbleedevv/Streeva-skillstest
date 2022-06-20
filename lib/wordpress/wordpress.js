import axios from "axios";

const url = `${process.env.BASE_API_URL + process.env.BASE_API_PATH}`;

const wordpress = axios.create({
  baseURL: url,
  // auth: {
  //     username: "username",
  //     password: "password",
  // },
  withCredentials: true,
  timeout: 25000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default wordpress;

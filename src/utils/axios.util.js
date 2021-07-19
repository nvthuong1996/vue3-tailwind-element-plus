/* eslint-disable no-undef */
import Axios from "axios";
import { getToken } from "./auth.util";

const baseURL = process.env.VUE_APP_BASE_API_URL;

const axios = Axios.create({
  baseURL,
  timeout: 10000,
});

axios.interceptors.request.use(
  async function (config) {
    // eslint-disable-next-line no-debugger
    const token = await getToken();
    config.headers["authorization"] = token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { axios };

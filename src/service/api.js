import axios from "axios";
import { store } from "..";
import { setLoadingOff, setLoadingOn } from "../redux/SpinnerSlice";

// axios instance
export let htpps = axios.create({
   baseURL:"https://movienew.cybersoft.edu.vn",
    headers:{
        TokenCybersoft : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjAyLzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzI4NjQwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE3NDM0MDAwfQ.I_5jTmaP4oPXDl-5EqRjQqnodRT3qKLF9_hDUjhDwFQ",
        Authorization:"bearer " + JSON.parse(localStorage.getItem("USER_INFO"))?.accessToken,
      },
});
// Add a request interceptor
htpps.interceptors.request.use(function (config) {
   store.dispatch(setLoadingOn())
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
htpps.interceptors.response.use(function (response) {
  store.dispatch(setLoadingOff())
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  store.dispatch((setLoadingOff()))
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
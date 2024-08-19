import axios from "axios";
import LocalStorageService from "../../storage/LocalStorageService";

// console.log("process.env.REACT_APP_PUBLIC_URL,", process.env);
// baseURL: "http://49.206.253.146:1773/",
const instance = axios.create({
  baseURL: "http://106.51.242.196:2109/",
})

const localStorageService = LocalStorageService.getService();
const userAccessToken = localStorageService.getUserAuthAccessToken();
 console.log("userAccessToken", userAccessToken);
// let accesstoken="5cd59bcb6f99cec3fc932e5d6f7fdabea59d96b8bf8d9b7980d2ac4bb955ff19"
// const jwt = localStorage.getItem("jwt");
const wt = localStorage.getItem("wt")|| "5010%2CCr60bN%2BkpKupU9z2XOruEm3ja2p%2FRKvW0%2B74U0jlEmyDMsUiFUcMUen%2F4eZ73nbUDskRRs6imJoPYvbp7dceX9pyqzWxCZ%2FuPVtVTgjuHG7em3YnZ5r9%2BJ5yarLUxSjWdo8i6VP1Y6As4WqXc5An2iWaSi5wgxOobJ4nrE1VZtkZRSHfnkQ5MdaEZIQqk5i1RCCvx4H5bgASCNQH%2Fe%2FLWyng027d2gLOQqNqxdk5U%2FV%2FVpE2Eil8m2VGPnm8uBc5If%2FRodcK%2BSoglIMIRjZd5w%3D%3D";
const wtt = localStorage.getItem("wtt") || "5010%2CL0WiZcDMpWZg5xv1LYrOKH%2BgSp08FVur35Bl%2FVuicBc%3D";
instance.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "application/json",
      "wt": wt,
      "wtt": wtt,
    };
    // if (userAccessToken) {
    //   config.headers["wt"] = wt;
    //   config.headers["wtt"] = wtt;
    // }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Add a response interceptor

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      // history.push( '/not-found' );
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default instance;

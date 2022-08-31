import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers!.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile") || "{}").token
    }`;
  }

  return req;
});

export const uploadImage = <T>(data: T) => API.post("/upload/", data);
export const uploadPost = <T>(data: T) => API.post("/posts", data);

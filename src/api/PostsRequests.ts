import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers!.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile") || "{}").token}`;

  }

  return req;
});

export const getTimelinePosts = (id: string | null) =>
  API.get(`/posts/${id}/timeline`);

export const likePost = (id: number | string, userId: string | null) =>
  API.put(`posts/${id}/like`, { userId: userId });

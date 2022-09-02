import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers!.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile") || "{}").token
      }`;
  }

  return req;
});

export const getUser = (userId: string | null) => API.get(`/user/${userId}`);

export const updateUser = (id: string | null, formData: any) =>
  API.put(`/user/${id}`, formData);

export const getAllUser = () => API.get("/user");

export const followUser = <T>(id: number | string, data: T) =>
  API.put(`/user/${id}/follow`, data);

export const unFollowUser = <T>(id: number | string, data: T) =>
  API.put(`/user/${id}/unFollow`, data);

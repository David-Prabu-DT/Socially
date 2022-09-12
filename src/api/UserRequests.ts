import API from "./Instance";

export const getUser = (userId: string | null) => API.get(`/user/${userId}`);

export const updateUser = (id: string | undefined, formData: object[]) =>
  API.put(`/user/${id}`, formData);

export const getAllUser = () => API.get("/user");

export const followUser = <T>(id: number | string, data: T) =>
  API.put(`/user/${id}/follow`, data);

export const unFollowUser = <T>(id: number | string, data: T) =>
  API.put(`/user/${id}/unFollow`, data);

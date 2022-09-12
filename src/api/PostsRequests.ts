import API from "./Instance";


export const getTimelinePosts = (id: string | null) =>
  API.get(`/posts/${id}/timeline`);

export const likePost = (id: number | string, userId: string | null) =>
  API.put(`posts/${id}/like`, { userId: userId });

import API from "./Instance";

export const uploadImage = (
   formData:
      | { id: string | null; name?: string; file?: Blob | null; type: string }
      | FormData
) => API.post("/upload/", formData);

export const uploadPost = <T>(data: T) => API.post("/posts", data);

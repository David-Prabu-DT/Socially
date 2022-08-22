import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });

export const createChat = <T>(data: T) => API.post('/chat/', data);

export const userChats = (id: number | string) => API.get(`/chat/${id}`);

export const findChat = (firstId: number | string, secondId: number | string) => API.get(`/chat/find/${firstId}/${secondId}`);
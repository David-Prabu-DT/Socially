import axios from 'axios'


const API = axios.create({ baseURL: process.env.BASE_URL });

export const getMessages = (id: number | String) => API.get(`/message/${id}`);

export const addMessage = <T>(data: T) => API.post('/message/', data);
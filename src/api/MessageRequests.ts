import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getMessages = (id: number | String) => API.get(`/message/${id}`);

export const addMessage = <T>(data: T) => API.post('/message/', data);
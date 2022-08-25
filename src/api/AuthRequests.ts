import axios from 'axios'

// ====Type Area
interface logInType {
   email?: string | number;
   password?: string | number;
}

interface signUpType {
   firstName?: string;
   lastName?: string;
   email?: string | number;
   password?: string | number;
}
// ==== Type Area


const API = axios.create({ baseURL: process.env.BASE_URL });

export const logIn = (formData: logInType) => API.post('/auth/login', formData);

export const signUp = (formData: signUpType) => API.post('/auth/register', formData);

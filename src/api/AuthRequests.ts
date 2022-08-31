import axios from "axios";
import { logInType, signUpType } from "../types/Global";

const API = axios.create({ baseURL: process.env.BASE_URL });

export const logIn = (formData: logInType) => API.post("/auth/login", formData);

export const signUp = (formData: signUpType) =>
  API.post("/auth/register", formData);

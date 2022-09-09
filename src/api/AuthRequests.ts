import axios from "axios";
import { LogInType, SignUpType } from "../types/Global";

const API = axios.create({ baseURL: process.env.BASE_URL });

export const logIn = (formData: LogInType) => API.post("/auth/login", formData);

export const signUp = (formData: SignUpType) =>
  API.post("/auth/register", formData);

import axios from "axios";
import { LogInType, SignUpType } from "../types/Global";

const API_BASE = axios.create({ baseURL: process.env.BASE_URL });

export const logIn = (formData: LogInType) => API_BASE.post("/auth/login", formData);

export const signUp = (formData: SignUpType) =>
  API_BASE.post("/auth/register", formData);

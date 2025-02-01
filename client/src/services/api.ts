import axios from "axios";

/**
 * Création d'une instance axios pour communiquer avec l'API
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL && "http://localhost:3310",
  withCredentials: true,
});

export { api };

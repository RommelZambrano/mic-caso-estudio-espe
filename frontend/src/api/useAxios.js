import axios from "axios";

// Obtiene la URL base de las variables de entorno.
const baseURL = import.meta.env.VITE_BACKEND_URL

// Crea una instancia de axios para las solicitudes que no incluye credenciales.
export const axi = axios.create({
    baseURL,
    withCredentials: false // Esto es importante para que las cookies se envíen correctamente
});


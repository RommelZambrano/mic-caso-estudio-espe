import { axi } from "./useAxios";

// Obtener todos los inmuebles
export const fetchInmuebles = async () => {
  const response = await axi.get("/inmueble/");
  return response.data;
};

// Obtener un inmueble específico por su ID
export const fetchInmuebleById = async (id) => {
  const response = await axi.get(`/inmueble/${id}/`);
  return response.data;
};

// Crear un nuevo inmueble
export const createInmueble = async (inmuebleData) => {
  const formData = new FormData();
  formData.append("direccion", inmuebleData.direccion);
  formData.append("numero_habitaciones", inmuebleData.numero_habitaciones);
  formData.append("tipo", inmuebleData.tipo);
  formData.append("costo_mensual", inmuebleData.costo_mensual);

  const response = await axi.post("/inmueble/", formData);

  return response.data;
};

// Actualizar un inmueble existente
export const updateInmueble = async (id, inmuebleData) => {
  const formData = new FormData();
  // Solo añade los campos que realmente deseas actualizar
  if (inmuebleData.direccion)
    formData.append("direccion", inmuebleData.direccion);
  if (inmuebleData.numero_habitaciones)
    formData.append("numero_habitaciones", inmuebleData.numero_habitaciones);
  if (inmuebleData.tipo) formData.append("tipo", inmuebleData.tipo); // El ID del tipo de inmueble, si es necesario
  if (inmuebleData.costo_mensual)
    formData.append("costo_mensual", inmuebleData.costo_mensual);

  const response = await axi.put(`/inmueble/${id}/`, formData);
  return response.data;
};

// Eliminar un inmueble
export const deleteInmueble = async (id) => {
  await axi.delete(`/inmueble/${id}/`);
};

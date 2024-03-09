import { authAxios, axi } from "./useAxios";

export const get_solo_user = async (id) => {
  const response = await authAxios.get(`/users/get/solo/${id}/`);
  return response.data;
};

export const edit_user = async (data) => {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("email", data.email);
  await authAxios.put(`/users/edit/${data.email}/`, formData);
};

export const search_users = async (query) => {
  const response = await authAxios.get(`/users/search/?query=${query}`);
  return response.data;
};

export const delete_user = async (id) => {
  await authAxios.delete(`/users/delete/${id}/`);
};

export const get_users = async () => {
  const response = await authAxios.get("/users/get/");
  return response.data;
};

export const registerRequest = async (
  email,
  username,
  password
) => {
  await axi.post("/users/register/", {
    email,
    username,
    password,
  });
};

export const loginRequest = async (email, password) => {
  const response = await axi.post("/users/login/", { email, password });
  return response;
};

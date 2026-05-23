import axiosInstance from "../services/axiosInstance";

// GET USERS
export const fetchUsers = async () => {

  const response =
    await axiosInstance.get("/users");

  return response.data;
};

// ADD USER
export const createUser = async (userData) => {

  const response =
    await axiosInstance.post(
      "/users",
      userData
    );

  return response.data;
};

// UPDATE USER
export const editUser = async (
  id,
  updatedData
) => {

  const response =
    await axiosInstance.put(
      `/users/${id}`,
      updatedData
    );

  return response.data;
};

// DELETE USER
export const removeUser = async (id) => {

  await axiosInstance.delete(
    `/users/${id}`
  );

  return id;
};
import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Input from "../components/common/Input";

import useUsers from "../hooks/useUsers";

import { validateUser } from "../utils/validation";

import { toast } from "react-toastify";

const EditUser = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    users,
    updateUser,
  } = useUsers();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      role: "",
    });

  const [errors, setErrors] =
    useState({});

  // Load user data
  useEffect(() => {

    const existingUser =
      users.find(
        (user) =>
          user.id === Number(id)
      );

    if (existingUser) {
      setFormData(existingUser);
    }

  }, [id, users]);

  // Handle Change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors =
      validateUser(formData);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    updateUser(formData);

   toast.success(
  "User Updated Successfully"
);

    navigate("/users");
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-xl">

      <h2 className="text-2xl font-bold mb-6">
        Edit User
      </h2>

      <form onSubmit={handleSubmit}>

        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          error={errors.role}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Update User
        </button>

      </form>
    </div>
  );
};

export default EditUser;
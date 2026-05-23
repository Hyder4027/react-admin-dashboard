import React, { useContext, useState } from "react";

import Input from "../common/Input";

import { UserContext } from "../../context/UserContext";

import { validateUser } from "../../utils/validation";
import { toast } from "react-toastify";
import Button from "../common/Button";

const UserForm = () => {
  // Access context values
  const { addUser, loading } = useContext(UserContext);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  // Error State
  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Reset Form
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      role: "",
    });

    setErrors({});
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateUser(formData);

    // If errors exist
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Add user
    await addUser(formData);

    // Reset form after submit
    resetForm();

    toast.success("User Added Successfully");
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-xl">
      <h2 className="text-2xl font-bold mb-6">Register User</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter name"
        />

        {/* Email */}
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter email"
        />

        {/* Role */}
        <Input
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          error={errors.role}
          placeholder="Enter role"
        />

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add User"}
          </Button>

          <Button type="button" variant="secondary" onClick={resetForm}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

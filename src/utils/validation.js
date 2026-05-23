export const validateUser = (values) => {

  let errors = {};

  // Name Validation
  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  // Email Validation
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/\S+@\S+\.\S+/.test(values.email)
  ) {
    errors.email = "Invalid email";
  }

  // Role Validation
  if (!values.role.trim()) {
    errors.role = "Role is required";
  }

  return errors;
};
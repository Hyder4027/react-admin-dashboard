import {
  validateUser,
} from "../utils/validation";

describe(
  "validateUser function",
  () => {

    test(
      "returns errors for empty fields",
      () => {

        const result =
          validateUser({
            name: "",
            email: "",
            role: "",
          });

        expect(result.name)
          .toBe(
            "Name is required"
          );

        expect(result.email)
          .toBe(
            "Email is required"
          );

        expect(result.role)
          .toBe(
            "Role is required"
          );

      }
    );

  }
);
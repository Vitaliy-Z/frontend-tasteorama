import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  privacyPolicyAccepted: false,
};

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .max(16, "Name must be at most 16 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format",
    )
    .max(128, "Email must be at most 128 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be at most 128 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  privacyPolicyAccepted: Yup.boolean()
    .oneOf([true], "You must accept the Terms and Privacy Policy")
    .required("You must accept the Terms and Privacy Policy"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .max(128, "Email must be at most 128 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be at most 128 characters")
    .required("Password is required"),
});

import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  privacyPolicyAccepted: false,
};

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .matches(/[a-z]/, "At least one lowercase letter")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .matches(/\d/, "At least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  privacyPolicyAccepted: Yup.boolean()
    .oneOf([true], "You must accept the Terms and Privacy Policy")
    .required("Required"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Невірний формат email")
    .required("Email обовʼязковий"),
  password: Yup.string()
    .min(6, "Пароль має містити мінімум 6 символів")
    .required("Пароль обовʼязковий"),
});

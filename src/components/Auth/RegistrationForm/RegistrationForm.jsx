import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { useState, useCallback } from "react";
import { Formik, Form } from "formik";
import { register } from "../../../redux/auth/operations.js";
import { registerSchema, initialValues } from "../formConfig.js";
import BaseInput from "../BaseInput.jsx";
import CheckboxInput from "./CheckboxInput.jsx";
import SubmitButton from "../SubmitButton.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = useCallback(
    async (values, actions) => {
      try {
        const { name, email, password, privacyPolicyAccepted } = values;
        await dispatch(
          register({ name, email, password, privacyPolicyAccepted })
        ).unwrap();
        actions.resetForm();
        navigate("/profile");
      } catch (error) {
        const message = error?.toLowerCase?.() || "";
        if (message.includes("email")) {
          actions.setFieldError("email", "Email already in use.");
        } else {
          toast.error("Registration failed. Try again later.");
        }
        actions.setSubmitting(false);
      }
    },
    [dispatch, navigate]
  );

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Register</h2>
      <p className={css.description}>
        Join our community of culinary enthusiasts, save your favorite recipes,
        and share your cooking creations
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className={css.form} noValidate>
            {status && (
              <div className={css.errorMessage} aria-live="polite">
                {status}
              </div>
            )}
            <BaseInput label="Enter your name" name="name" placeholder="Max" />
            <BaseInput
              label="Enter your email address"
              name="email"
              type="email"
              placeholder="email@gmail.com"
            />
            <BaseInput
              label="Create a strong password"
              name="password"
              placeholder="********"
              type="password"
              showToggle
              show={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />
            <BaseInput
              label="Repeat your password"
              name="confirmPassword"
              placeholder="********"
              type="password"
              showToggle
              show={showConfirm}
              onToggle={() => setShowConfirm(!showConfirm)}
            />
            <CheckboxInput name="privacyPolicyAccepted">
              <p className={css.checkbox_privacy}>
                I agree to the Terms of Service and Privacy Policy
              </p>
            </CheckboxInput>

            <SubmitButton isSubmitting={isSubmitting} text="Create account" />

            <p className={css.footer}>
              Already have an account?{" "}
              <NavLink to="/auth/login" className={css.login}>
                Log in
              </NavLink>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

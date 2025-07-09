import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";

import { fetchRegisterUser } from "../../../redux/auth/operations.js";
import { selectAuthError } from "../../../redux/auth/selectors.js";
import { registerSchema, initialValues } from "./formConfig.js";

import BaseInput from "./BaseInput.jsx";
import CheckboxInput from "./CheckboxInput.jsx";
import SubmitButton from "./SubmitButton.jsx";
import RedirectLink from "./RedirectLink.jsx";

import "react-toastify/dist/ReactToastify.css";
import css from "./StylesForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const authError = useSelector(selectAuthError);

  const handleSubmit = useCallback(
    async (values, actions) => {
      try {
        const { name, email, password, privacyPolicyAccepted } = values;

        await dispatch(
          fetchRegisterUser({ name, email, password, privacyPolicyAccepted }),
        ).unwrap();

        toast.success("Registration successful");
        navigate("/");
      } catch {
        toast.error(
          authError?.message || "Registration failed. Try again later.",
        );
      } finally {
        actions.setSubmitting(false);
      }
    },
    [dispatch, navigate, authError],
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
        {({ isSubmitting }) => (
          <Form className={css.form} noValidate>
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
            <CheckboxInput name="privacyPolicyAccepted" />

            <SubmitButton isSubmitting={isSubmitting} text="Create account" />

            <RedirectLink
              text="Already have an account?"
              linkText="Log in"
              to="/auth/login"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

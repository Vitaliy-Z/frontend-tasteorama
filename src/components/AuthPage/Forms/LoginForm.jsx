import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useCallback } from "react";

import SubmitButton from "./SubmitButton.jsx";
import BaseInput from "./BaseInput.jsx";
import RedirectLink from "./RedirectLink.jsx";
import { fetchLoginUser } from "../../../redux/auth/operations.js";
import { selectAuthError } from "../../../redux/auth/selectors.js";
import { loginSchema, loginInitialValues } from "./formConfig.js";

import css from "./StylesForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const authError = useSelector(selectAuthError);

  const handleSubmit = useCallback(
    async (values, actions) => {
      try {
        await dispatch(fetchLoginUser(values)).unwrap();
        toast.success("Login successful");
        navigate("/");
      } catch {
        toast.error(authError?.message || "Invalid email or password");
      } finally {
        actions.setSubmitting(false);
      }
    },
    [dispatch, navigate, authError],
  );

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Login</h2>

      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form} noValidate>
            <BaseInput
              label="Enter your email address"
              name="email"
              type="email"
              placeholder="email@gmail.com"
            />
            <BaseInput
              label="Enter your password"
              name="password"
              type="password"
              placeholder="********"
              showToggle
              show={showPassword}
              onToggle={() => setShowPassword((prev) => !prev)}
            />
            <SubmitButton isSubmitting={isSubmitting} text="Login" />
            <RedirectLink
              text="Don't have an account?"
              linkText="Register"
              to="/auth/register"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

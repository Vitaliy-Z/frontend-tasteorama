import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useCallback } from "react";
import SubmitButton from "../SubmitButton.jsx";
import { login as loginThunk } from "../../../redux/auth/operations.js";
import { loginSchema, loginInitialValues } from "../formConfig.js";
import BaseInput from "../BaseInput.jsx";

import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = useCallback(
    async (values, actions) => {
      try {
        await dispatch(loginThunk(values)).unwrap();
        toast.success("Login");
        navigate("/profile");
      } catch (error) {
        toast.error(error || "Невірний email або пароль");
        actions.setSubmitting(false);
      }
    },
    [dispatch, navigate]
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
              label="Create a strong password"
              name="password"
              type="password"
              placeholder="*********"
              showToggle
              show={showPassword}
              onToggle={() => setShowPassword((prev) => !prev)}
            />

            <SubmitButton isSubmitting={isSubmitting} text="Login" />

            <p className={css.footer}>
              Don’t have an account?{" "}
              <NavLink to="/auth/register" className={css.login}>
                Register
              </NavLink>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

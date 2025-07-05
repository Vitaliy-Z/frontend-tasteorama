import { useParams, Navigate } from "react-router-dom";
import RegistrationForm from "../components/AuthPage/Forms/RegistrationForm.jsx";
import LoginForm from "../components/AuthPage/Forms/LoginForm.jsx";

const AuthPage = () => {
  const { authType } = useParams();

  if (authType === "register") return <RegistrationForm />;
  if (authType === "login") return <LoginForm />;

  return <Navigate to="/auth/login" replace />;
};

export default AuthPage;

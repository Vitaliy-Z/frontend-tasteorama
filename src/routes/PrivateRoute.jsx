import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors.js";

export const PrivateRoute = ({ component: Component }) => {
  const isUserLoggedIn = useSelector(selectUser);

  return isUserLoggedIn ? <Component /> : <Navigate to="/auth" replace />;
};

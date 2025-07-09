import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectUser } from "../redux/auth/selectors.js";

export const PrivateRoute = ({ component }) => {
  const isUserLoggedIn = useSelector(selectUser);
  const Component = component;
  return isUserLoggedIn ? <Component /> : <Navigate to="/auth/login" replace />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

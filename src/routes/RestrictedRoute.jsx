import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectUser } from "../redux/auth/selectors.js";

export const RestrictedRoute = ({ component }) => {
  const isUserLoggedIn = useSelector(selectUser);
  const Component = component;
  return !isUserLoggedIn ? <Component /> : <Navigate to="/" replace />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

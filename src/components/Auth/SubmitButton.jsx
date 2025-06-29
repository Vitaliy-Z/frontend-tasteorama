import PropTypes from "prop-types";
import Spinner from "./Spinner.jsx";
import css from "./RegistrationForm/RegistrationForm.module.css";

const SubmitButton = ({ isSubmitting, text }) => {
  return (
    <button
      type="submit"
      className={css.submitBtn}
      disabled={isSubmitting}
      aria-busy={isSubmitting}
    >
      {isSubmitting ? <Spinner /> : text}
    </button>
  );
};

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubmitButton;

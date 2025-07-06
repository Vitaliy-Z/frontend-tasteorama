import PropTypes from "prop-types";
import Loader from "../../shared/Loader/Loader";
import css from "./StylesForm.module.css";

const SubmitButton = ({ isSubmitting, text }) => {
  if (isSubmitting) return <Loader />;

  return (
    <button
      type="submit"
      className={css.submitBtn}
      disabled={isSubmitting}
      aria-busy={isSubmitting}
    >
      {text}
    </button>
  );
};

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default SubmitButton;

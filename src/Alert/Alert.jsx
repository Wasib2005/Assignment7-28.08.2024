import PropTypes from "prop-types";

const Alert = ({ showMessage, message }) => {
  return (
    <div>
      <div
        className={`toast toast-top toast-end ${showMessage ? "" : "hidden"}`}
      >
        <div className="alert alert-success">
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  showMessage: PropTypes.bool,
  message: PropTypes.string
};

export default Alert;

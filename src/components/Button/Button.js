import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, btnType, isLoading, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[btnType]}`}
      disabled={isLoading}
      {...otherProps}
    >
      {!isLoading ? children : <div className="button-spinner"></div>}
    </button>
  );
};

export default Button;

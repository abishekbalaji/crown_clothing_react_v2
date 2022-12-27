import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, btnType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[btnType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

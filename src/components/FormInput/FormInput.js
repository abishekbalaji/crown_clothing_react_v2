import "./FormInput.scss";

const FormInput = ({ label, ...otherProps }) => {
  console.log("label: ", label);
  return (
    <div className="group">
      <input {...otherProps} className="form-input" />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

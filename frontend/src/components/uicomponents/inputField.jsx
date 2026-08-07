import PropTypes from "prop-types";
import classNames from "classnames";

const InputField = (props) => {
  const css = classNames({
    "custom-text-input": true,
  });
  const errorId = `${props.id}-error`;

  const label = props.label + (props.required ? " *" : "");

  return (
    <div className={css}>
      {props.label && <label htmlFor={props.id}>{label}</label>}
      <input
        id={props.id}
        name={props.name}
        className={props.hasError ? "error" : ""}
        aria-invalid={props.hasError}
        aria-describedby={props.hasError ? errorId : undefined}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        aria-label={props.ariaLabel}
        required={props.required}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        autoComplete={props.autoComplete}
      />
      {props.hasError && <p id={errorId}>{props.errorMessage}</p>}
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  ariaLabel: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  autoComplete: PropTypes.string,
};

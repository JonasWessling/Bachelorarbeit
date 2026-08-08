import classNames from "classnames";
import PropTypes from "prop-types";

const TextArea = (props) => {
  const css = classNames({
    "custom-text-area": true,
  });

  const errorId = `${props.id}-error`;

  return (
    <div className={css}>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        name={props.name}
        aria-invalid={props.hasError}
        aria-describedby={props.hasError ? errorId : undefined}
        placeholder={props.placeholder}
        onChange={props.onChange}
        aria-label={props.ariaLabel}
        required={props.required}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        autoComplete={props.autoComplete}
        cols={props.columns}
        rows={props.rows}
      />
      {props.hasError && <p id={errorId}>{props.errorMessage}</p>}
    </div>
  );
};

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  ariaLabel: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  autoComplete: PropTypes.string,
  columns: PropTypes.string,
  rows: PropTypes.string,
};

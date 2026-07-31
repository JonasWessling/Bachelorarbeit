import PropTypes from "prop-types";

const Checkbox = ({
  id,
  label,
  checked,
  required,
  disabled,
  name,
  onChange,
}) => {
  const handleChange = (event) => {
    if (typeof onChange === "function") {
      onChange(event.target.checked, event);
    }
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        required={required}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        className="checkbox-input"
      />
      {label ? (
        <label htmlFor={id} className="checkbox-label">
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

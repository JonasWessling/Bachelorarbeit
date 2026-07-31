import PropTypes from "prop-types";

const Dropdown = ({
  id,
  label,
  value,
  onChange,
  options = [],
  name,
  disabled,
  required,
}) => {
  const handleChange = (event) => {
    if (typeof onChange === "function") {
      onChange(event.target.value, event);
    }
  };

  return (
    <div className="dropdown">
      {label ? (
        <label htmlFor={id} className="dropdown-label">
          {label}
        </label>
      ) : null}
      <div className="dropdown-field">
        <select
          id={id}
          name={name ?? id}
          value={value}
          onChange={handleChange}
          className="dropdown-menu"
          disabled={disabled}
          required={required}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="dropdown-option"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

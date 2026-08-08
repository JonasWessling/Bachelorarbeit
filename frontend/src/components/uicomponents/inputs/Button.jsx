import PropTypes from "prop-types";
import classNames from "classnames";

const Button = (props) => {
  const isIconButton = !!props.icon;

  const css = classNames({
    btn: true,
    [`btn-${props.variant}`]: !!props.variant,
    [`btn-${props.size}`]: !!props.size,
  });

  return (
    <button
      type={props.type}
      className={css}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.sx}
    >
      {isIconButton && props.icon}
      {!isIconButton && props.text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "outline",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  text: PropTypes.string,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  sx: PropTypes.object,
};

import PropTypes from "prop-types";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./button.scss";

const Buttons = (props) => {
  const { children, className, variant, icon, ...rest } = props;
  return (
    <Button
      className={`${className} buttonDiv`}
      disabled={props.disabled}
      variant={variant}
      {...rest}
    >
      {icon && (
        <span>
          <i className={icon}></i>
        </span>
      )}
      {children}
    </Button>
  );
};
Buttons.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};
Buttons.defaultProps = {
  size: "sm",
  type: "button",
  variant: "primary",
  disabled: false,
};

export default Buttons;

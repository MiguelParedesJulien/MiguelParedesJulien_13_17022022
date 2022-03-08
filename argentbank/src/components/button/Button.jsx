import PropTypes from "prop-types";
import React from "react";
import "components/button/button.css";

const Button = ({ className, text, action }) => {
  return (
    <button className={className} onClick={action}>
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default Button;

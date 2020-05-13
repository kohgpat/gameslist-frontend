import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const Button = ({ children, disabled, type, className, icon, ...rest }) => {
  const Icon = icon;

  return (
    <button
      disabled={disabled}
      type={type}
      className={cn(s.button, disabled && s.buttonDisabled, className)}
      {...rest}
    >
      {icon && <Icon className={s.buttonIcon} />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;

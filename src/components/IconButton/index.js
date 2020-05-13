import React from "react";
import cn from "classnames";
import s from "./index.module.css";

function IconButton({ type, className, children, big, ...rest }) {
  return (
    <button
      type={type}
      className={cn(s.button, big && s.buttonBig, className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export default IconButton;

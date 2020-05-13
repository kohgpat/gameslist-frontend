import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const Input = ({ type, value, onChange, className, ...rest }) => {
  return (
    <input
      className={cn(s.input, className)}
      type={type}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;

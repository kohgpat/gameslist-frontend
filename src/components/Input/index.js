import React, { forwardRef } from "react";
import cn from "classnames";
import s from "./index.module.css";

const Input = forwardRef(
  ({ type, value, onChange, className, ...rest }, ref) => (
    <input
      className={cn(s.input, className)}
      type={type}
      value={value}
      onChange={onChange}
      ref={ref}
      {...rest}
    />
  )
);

export default Input;

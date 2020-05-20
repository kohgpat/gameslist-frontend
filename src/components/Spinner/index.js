import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const Spinner = ({ className }) => {
  return (
    <div className={cn(s.spinner, className)}>
      <span className={s.spinnerText}>Loading...</span>
    </div>
  );
};

export default Spinner;

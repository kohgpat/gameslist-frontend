import React from "react";
import s from "./index.module.css";

const Spinner = () => {
  return (
    <div className={s.spinner}>
      <span className={s.spinnerText}>Loading...</span>
    </div>
  );
};

export default Spinner;

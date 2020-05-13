import React from "react";
import s from "./index.module.css";

const Screen = ({ children }) => {
  return <div className={s.screen}>{children}</div>;
};

export default Screen;

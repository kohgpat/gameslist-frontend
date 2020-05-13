import React from "react";
import s from "./index.module.css";

const Main = ({ children }) => {
  return <main className={s.main}>{children}</main>;
};

export default Main;

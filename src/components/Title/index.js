import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const Title = ({ children, as, noMargin }) => {
  const Comp = as;

  return (
    <Comp className={cn(s.title, noMargin && s.titleNoMargin)}>{children}</Comp>
  );
};

Title.defaultProps = {
  as: "h1",
};

export default Title;
